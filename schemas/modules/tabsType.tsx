import { PanelTop, SquareStack } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

// const data = {
//   heading: "",
//   caption: "",
//   tabs: {
//      tab: {
//          heading: "",
//          text: "",
//      image: {
//          imageUrl: "",
//          alt: "",
//     },
//   },
// }

// };

export const tabsType = defineType({
  name: "tabs",
  type: "object",
  fieldsets: [
    { name: "settings", title: "Settings" },
    { name: "content", title: "Content" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title for internal reference and jump-to-section links",
      type: "string",
      description: TITLE_DESCRIPTION,
      fieldset: "settings",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "caption",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "tabs",
      type: "array",
      of: [
        defineField({
          name: "tab",
          type: "object",
          fieldset: "content",
          validation: (rule) => rule.required(),
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "image",
              type: "image",

              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                }),
              ],
            }),
          ],
          icon: <PanelTop size={16} />,
          preview: {
            select: {
              title: "heading",
            },
            prepare({ title }) {
              return {
                title: title,
                subtitle: "Tab",
              };
            },
          },
        }),
      ],
    }),
  ],
  icon: <SquareStack size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Tabs",
      };
    },
  },
});
