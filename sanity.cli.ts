import {defineCliConfig} from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: "rx60gme7",
    dataset: "production", //process.env.ENV === 'development' ? 'development' : 'production',
  },
});
