import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  type: "document",
  title: "Header Navigation",
  fields: [
    defineField({
      name: "items",
      type: "array",
      title: "Navigation Items",
      of: [{ type: "navigationItem" }],
    }),
  ],
});
