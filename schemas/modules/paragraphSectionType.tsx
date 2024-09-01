import { LetterText } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const paragraphSectionType = defineType({
  name: "paragraphSection",
  type: "object",
  title: "Paragraph Section",
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
      name: "description",
      type: "string",
      title: "Paragraph description",
      description: "Optional block description for internal use",
      fieldset: "content",
    }),
    defineField({
      name: "textBlock",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "content",
    }),
    defineField({
      name: "button",
      type: "object",
      fieldset: "content",
      fields: [
        defineField({
          name: "text",
          type: "string",
          title: "Link Text",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "Link Url",
        }),
      ],
    }),
  ],
  icon: <LetterText size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Paragraph Section",
      };
    },
  },
});
