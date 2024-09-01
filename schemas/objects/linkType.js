import AsyncSelect from "@/components/studio/AsyncSelect";
import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "typeOfLink",
      title: "Link Type",
      type: "string",
      initialValue: "internal",
      options: {
        list: ["internal", "external"],
        layout: "radio",
      },
    }),
    defineField({
      name: "internalLink",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "pageBuilder" }],
      hidden: ({ parent }) => parent?.typeOfLink === "external",
    }),

    // Have to restructure the data in pagebuilder
    defineField({
      name: "linkToPortion",
      title: "Link to portion of a page",
      description: "Optional",
      type: "object",
      fields: [
        defineField({
          name: "pagePortionKey",
          title: "Select a section of the page",
          type: "string",
          components: {
            input: AsyncSelect,
          },
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
      hidden: ({ parent }) => parent?.typeOfLink === "external",
    }),

    defineField({
      name: "externalUrl",
      type: "url",
      description: "Use fully qualified URLS for external link",
      hidden: ({ parent }) => parent?.typeOfLink === "internal",
    }),
  ],
});
