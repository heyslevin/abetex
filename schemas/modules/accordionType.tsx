import { LetterText, ListCollapse } from "lucide-react";
import { defineField, defineType } from "sanity";

export const accordionType = defineType({
  name: "accordion",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "Heading on the left side of accordion",
    }),
    defineField({
      name: "text",
      type: "text",
      rows: 3,
      description: "Optional text below heading",
    }),
    defineField({
      name: "accordionItems",
      type: "array",
      of: [
        defineField({
          name: "item",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "description",
              type: "text",
              rows: 3,
            },
          ],
          icon: LetterText,
        }),
      ],
    }),
  ],
  icon: <ListCollapse size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Accordion",
      };
    },
  },
});
