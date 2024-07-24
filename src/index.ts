import {
  type APIKeyRecord,
  getServerEndpointConfig,
  InMemoryDataSource,
  type IntentData,
  type IRSData,
  runIRSServer,
} from 'intento';

// import data
import * as IRS_DATA from '../data/irs-data.json';
import * as INTENTS_DATA from '../data/intents-data.json';
import * as API_KEYS_DATA from '../data/api-keys-data.json';

/**
 * Main function performs the following steps:
 * 1. Create an in-memory data source for IRS.
 * 2. Get the complete configurations required to setup the IRS endpoint.
 * 3. Run server with the IRS endpoint configurations.
 */
export async function main() {
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

  // Get the complete configurations required to setup the IRS endpoint.
  // This will involve fetching the IRS data from data source, setting up the require prompts with IRS data and API key store setup.
  const irsEndpointConfig = await getServerEndpointConfig({
    endpoint: 'irs',
    dataSource: irsDataSource,
  });

  // Run server with the IRS endpoint configurations.
  // You can provide multiple endpoint configurations if you want to enable multiple IRS endpoints.
  runIRSServer({
    endpointConfigs: [irsEndpointConfig],
  });
}

// Run the main function
main();
