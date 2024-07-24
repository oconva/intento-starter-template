import {
  InMemoryDataSource,
  runIRSServer,
  type IRSData,
  type IntentData,
  type APIKeyRecord,
  type IRSEndpointResponse,
} from '@oconva/intento';

// import data
import * as IRS_DATA from '../../data/irs-data.json';
import * as INTENTS_DATA from '../../data/intents-data.json';
import * as API_KEYS_DATA from '../../data/api-keys-data.json';

/**
 * Integration tests for IRS (Intent Recognition Service).
 */
describe('IRS Test', () => {
  // server params
  const port = 3400;
  const endpointName = 'irs';
  const url = `http://localhost:${port}/${endpointName}`;

  // Test API key and user id
  const testKey = 'a5zwhp0YlcRVkpnOXchIkL1lrmf0MPg24POM0kO6HcM=';
  const testUID = 'DI2UZuaTWjQPzVCRjzPW';

  // default test timeout
  const defaultTimeout = 10000; // 10 seconds

  beforeEach(async () => {
    // Create an in-memory data source for IRS.
    // Below example uses the sample data present in the `data` directory at the root of the project.
    const irsDataSource = new InMemoryDataSource({
      irsId: 'jV0DFAmdTGVA8mtTUdlC',
      files: {
        irsData: IRS_DATA as IRSData[],
        intentsData: INTENTS_DATA as IntentData[],
        apiKeysData: API_KEYS_DATA as APIKeyRecord[],
      },
    });

    // Configure the IRS endpoint with endpoint name and data source.
    const irsEndpointConfig = {
      endpoint: 'irs',
      dataSource: irsDataSource,
    };

    // Run server with the IRS endpoint configurations.
    // You can provide multiple endpoint configurations if you want to enable multiple IRS endpoints.
    // This will involve fetching the IRS data from data source, setting up the required prompts with IRS data, and API key store setup.
    runIRSServer({
      endpointConfigs: [irsEndpointConfig],
    });
  });

  test(
    'Confirm IRS is working as expected',
    async () => {
      // send HTTP POST request to the IRS endpoint
      const fetchResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: testKey,
        },
        body: JSON.stringify({
          data: {
            query: 'add 4 litres of milk',
            uid: testUID,
          },
        }),
      });
      // retrieve response JSON data
      const endpointResponse =
        (await fetchResponse.json()) as IRSEndpointResponse;
      // parse IRS response
      const parsedData = endpointResponse.result.response;

      // parsed data shouldn't be undefined
      if (parsedData === undefined) {
        throw new Error('parsed data is undefined');
      }

      // should not contain error
      if ('error' in parsedData) {
        throw new Error(
          `Error in response. Response: ${JSON.stringify(parsedData)}`
        );
      }

      // code should be defined
      expect(parsedData.code).toBeDefined();
      // code should "intent-recognized"
      expect(parsedData.code).toBe('intent-recognized');
      // output should be defined
      expect(parsedData.output).toBeDefined();
      // output should have intent_code
      expect('intent_code' in parsedData.output).toBe(true);
      // intent_code should be "add-item"
      if ('intent_code' in parsedData.output) {
        expect(parsedData.output.intent_code).toBe('add-item');
        // output should have data
        expect(parsedData.output.data).toBeDefined();
        // data should be as expected
        expect(parsedData.output.data).toEqual({
          item_name: 'milk',
          item_quantity: '4',
          item_quantity_unit: 'litres',
          item_expiry_date: null,
        });
      }
    },
    defaultTimeout
  );
});
