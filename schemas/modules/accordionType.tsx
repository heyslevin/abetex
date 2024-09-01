import { LetterText, ListCollapse } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const accordionType = defineType({
  name: "accordion",
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
    }),
    defineField({
      name: "heading",
      type: "string",
      description: "Heading on the left side of accordion",
      fieldset: "content",
    }),
    defineField({
      name: "text",
      type: "text",
      rows: 3,
      description: "Optional text below heading",
      fieldset: "content",
    }),
    defineField({
      name: "accordionItems",
      type: "array",
      fieldset: "content",
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
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Accordion",
      };
    },
  },
});
