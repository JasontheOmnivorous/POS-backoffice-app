interface Config {
  apiBaseUrl: string;
}

// share URL to avoid code repetition
const config: Config = {
  apiBaseUrl: "http://localhost:8000/api/v1",
};

export default config;
