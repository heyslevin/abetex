import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "internalLink",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "pageBuilder" }],
    }),
    defineField({
      name: "externalUrl",
      type: "url",
      description: "Use fully qualified URLS for external link",
    }),
  ],
});
