# Intento Starter Template

This is a starter template for [Intento](https://intento.pkural.ca). It comes pre-configured with the following features:

- **Intento**: Intento installed and configured to start serving intent recognition service endpoints.
- **TypeScript**: TypeScript to allow you to write type-safe code efficiently.
- **ESLint**: ESLint to enforce code quality and consistency.
- **Prettier**: Prettier to format your code automatically and ensure consistent code style.
- **Jest**: Jest to run your tests and ensure your code works as expected.
- **GitHub Actions**: GitHub Actions to run your tests and lint your code automatically on every push.
- **SWC**: For faster and more efficient TypeScript compilation.
- **PNPM**: PNPM to manage your dependencies efficiently.

## Getting Started

Simply, clone the [intento starter template](https://github.com/oconva/intento-starter-template) to get started.

```bash copy
git clone https://github.com/oconva/intento-starter-template.git
```

### Setup Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env copy
GOOGLE_GENAI_API_KEY=
OPENAI_API_KEY=
GOOGLE_APPLICATION_CREDENTIALS=
```

Alternatively, you can copy the `.env.tmp` file or rename it to `.env` and fill in the values.

By default intento uses the Google GenAI, so to use intento with default settings, you need to provide the `GOOGLE_GENAI_API_KEY`. You don't have to set values for other environment variables if you are using the default settings.

Add value to the `OPENAI_API_KEY` variable if you're going to use OpenAI models and to the `GOOGLE_APPLICATION_CREDENTIALS` variable if you're going to use Firebase Firestore.

### Running the Project

You can run the following commands to get started:

```bash copy
npm install # or pnpm install
npm run dev # or pnpm dev
```

The starter template predefines some chat endpoints. Once, you run the project, you can test the endpoints from terminal using command below:

```bash copy
curl -X POST "http://127.0.0.1:3400/irs" -H "Content-Type: application/json" -H "Authorization: a5zwhp0YlcRVkpnOXchIkL1lrmf0MPg24POM0kO6HcM=" -d '{"data": { "query": "add 4 litres milk?", "uid": "DI2UZuaTWjQPzVCRjzPW" } }'
```

Above example points to `http://127.0.0.1:3400`. You can change this port and host depending on where you are running the server and on which port.

You could also use the [Genkit Developer UI](#genkit-developer-ui) to test the endpoints.

### Testing

The starter template comes with Jest pre-configured to run your tests, and some tests predefined in the `src/tests` directory. You can run the tests using the following command:

```bash copy
npm run test # or pnpm test
```

Please ensure you have the environment variables set up before running the tests.

By default, Jest is configured to test the source code in the `src` directory. You can change the configuration in the `jest.config.js` file, along with any other Jest configurations you may want to change.

### Genkit Developer UI

You can run the Genkit developer UI to test the endpoints. Testing the endpoints using a graphical interface is probably the easiest way to get started. You can know more about the Genkit Developer UI [here](https://firebase.google.com/docs/genkit/devtools#genkit_developer_ui).

Start the Genkit developer UI:

```bash copy
npx genkit start
```

OR, you can install the Genkit CLI globally:

```bash copy
npm i -g genkit
```

Then start the Genkit developer UI:

```bash copy
genkit start
```
