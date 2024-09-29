import { createClient } from "next-sanity";

const sanityClient = createClient({
  dataset: "production",
  apiVersion: "2021-03-25",
  projectId: "rx60gme7",
});

export default sanityClient;