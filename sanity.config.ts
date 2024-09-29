import {defineConfig} from 'sanity';
import {
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: "default",
  title: "kreativeusa.com",
  basePath: "/admin",
  apiVersion: "2021-03-25",
  projectId: "rx60gme7",
  dataset: "production", // process.env.ENV === 'development' ? 'development' : 'production',
  useCdn: true,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    visionTool(),
    sanityTutorialsWidget(),
    projectInfoWidget(),
    projectUsersWidget(),
  ],
});
