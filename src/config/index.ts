interface Config {
  apiBaseUrl: string;
}

// share URL to avoid code repetition
const config: Config = {
  // apiBaseUrl can't be fixed value, because if we deploy this guy up, the URL wont be in localhost anymore
  // only use the name NEXT_PUBLIC when the info is intended to send to the frontend
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
};

export default config;
