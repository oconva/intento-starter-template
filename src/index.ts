import {
  InMemoryDataSource,
  runIRSServer,
  type IRSData,
  type IntentData,
  type APIKeyRecord,
} from '@oconva/intento';

// import data
import * as IRS_DATA from '../data/irs-data.json';
import * as INTENTS_DATA from '../data/intents-data.json';
import * as API_KEYS_DATA from '../data/api-keys-data.json';

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
