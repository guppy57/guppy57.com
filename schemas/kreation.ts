import { defineField, defineType } from "sanity";
import tags from "@/lib/tags";

export default defineType({
  name: "kreation",
  title: "Kreation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "1-Line Description",
      type: "string",
    }),
    defineField({
      name: "brief",
      title: "Brief",
      description:
        "This is a longer description of the Kreation. Can be a few paragraphs if you want.",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Typographic Logo",
      type: "image",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      fields: [
        {
          name: "width",
          type: "string",
          title: "Width",
        },
        {
          name: "height",
          type: "string",
          title: "Height",
        },
        {
          name: "shadow",
          type: "string",
          title: "Shadow Styles"
        }
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Inactive", value: "inactive" },
          { title: "Active", value: "active" },
          { title: "Coming soon", value: "coming-soon" },
        ],
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: tags,
      },
    }),
    defineField({
      name: "url",
      title: "Visit URL",
      type: "url",
    }),
    defineField({
      name: "founding_year",
      title: "Founding Year",
      type: "number",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string"
    })
  ],
});
