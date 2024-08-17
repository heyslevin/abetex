import { PanelTop, SquareStack } from "lucide-react";
import { defineField, defineType } from "sanity";

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
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "caption",
      type: "string",
    }),
    defineField({
      name: "tabs",
      type: "array",
      of: [
        defineField({
          name: "tab",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "text",
              type: "string",
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
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Tabs",
      };
    },
  },
});
