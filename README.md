## Intento Starter Template

To get up and running quickly with the [Intento](https://intento.pkural.ca) framework, you can use the Intento starter template. The starter template is a pre-configured project with all the necessary configurations and setup to get you started with Intento write quality and reliable code. It comes pre-configured with the following features:

- **Intento**: Intento installed and configured to start serving intent recognition service endpoints.
- **TypeScript**: TypeScript to allow you to write type-safe code efficiently.
- **ESLint**: ESLint to enforce code quality and consistency.
- **Prettier**: Prettier to format your code automatically and ensure consistent code style.
- **Jest**: Jest to run your tests and ensure your code works as expected.
- **GitHub Actions**: GitHub Actions to run your tests and lint your code automatically on every push.
- **SWC**: For faster and more efficient TypeScript compilation.
- **PNPM**: PNPM to manage your dependencies efficiently.

To learn more about Intento, check the [Intento](https://intento.pkural.ca) documentation.

To get started, follow the instructions below.

### Setup

Simply, clone the [Intento starter template](https://github.com/oconva/intento-starter-template) to get started.

```bash
git clone https://github.com/oconva/intento-starter-template.git
```

### Setup Environment Variables

By default, Intento uses Google's Gemini API for text generation and embedding models. If you don't yet have a Google Gen AI API key, you can get one from [Gemini API - Get an API Key](https://ai.google.dev/gemini-api/docs/api-key).

You can also use OpenAI API instead of Gemini API. You'll have to provide your OpenAI API key as the `OPENAI_API_KEY` environment variable and configure your IRS endpoints to use the LLM model you want it to use.

Intento was developed using QvikChat which is built on top of Firebase Genkit, which allows you to easily add any Genkit plugins to your Intento project. You can easily use any LLM model available through any Genkit plugin by simply configuring that plugin when setting up Genkit.

To learn more about configuring IRS endpoints to use a specific LLM model, check [here](https://intento.pkural.ca/irs-endpoints).

If using the default Gemini API models or OpenAI models, there should be a `.env` file at the root level of your project directory, and it should have a value for at least one of the following, depending on which API you want to use:

```bash
GOOGLE_GENAI_API_KEY=
OPENAI_API_KEY=
```

Alternatively, you can copy the `.env.tmp` file or rename it to `.env` and fill in the values.

### Install Dependencies

You can run the following commands to install the dependencies:

```bash
npm install # or pnpm install
```

### Testing Predefined Endpoint

Intento starter template comes pre-defined with an IRS endpoint based on test data related to an inventory management app. This endpoint is defined in the `src/index.ts` file.

You can test the pre-defined endpoint to see how the IRS endpoints work and to confirm Intento setup. You can do this either using a graphical interface or by running the server locally and testing the endpoints using the terminal.

#### Test from Terminal

You can run the server locally to test the endpoints from their REST endpoints.

Before you can do this, you will need to first compile the TypeScript code.

Compile the TypeScript code. You can modify `.swcrc` to change the SWC configurations and `package.json` to adjust the build command.

```bash copy
npm run build
```

Or

```bash copy
pnpm build
```

Then, start the server:

```bash copy
npm run start
```

Or

```bash copy
pnpm start
```

Depending on which endpoint you wish to test, and where and on which port your server starts, you should be able to access the IRS endpoints through the terminal using the `curl` command. The below given example sends the query to the `irs` endpoint:

```bash copy
curl -X POST "http://127.0.0.1:3400/irs" -H "Content-Type: application/json" -H "Authorization: a5zwhp0YlcRVkpnOXchIkL1lrmf0MPg24POM0kO6HcM=" -d '{"data": { "query": "add 4 litres milk?", "uid": "DI2UZuaTWjQPzVCRjzPW" } }'
```

#### Test Using Genkit Developer UI

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

You should be able to see your defined IRS endpoints under the **Flows** section in the left sidebar. Simply click on the endpoint you want to test and enter the query you want to test with. Clicking the **Run** button will send the query to the endpoint and the response generation process will start.

Check the [testing endpoints](https://intento.pkural.ca/testing-endpoints) section to learn more about how you can test your IRS endpoints.

To learn more about the Intento starter template, check the [Intento Starter Template](https://github.com/oconva/intento-starter-template) repo.

## Contributions

Contributions are welcome! Please refer to the [contribution guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or bugs while using the Intento Starter Template, please report them by following these steps:

1. Check if the issue has already been reported by searching our issue tracker.
2. If the issue hasn't been reported, create a new issue and provide a detailed description of the problem.
3. Include steps to reproduce the issue and any relevant error messages or screenshots.

[Open Issue](https://github.com/oconva/intento-starter-template/issues)
