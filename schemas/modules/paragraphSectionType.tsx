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
    { name: "style", title: "Style" },
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
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Optional caption above main text",
      fieldset: "content",
    }),
    defineField({
      name: "textBlock",
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
          ],
          // Only allow numbered lists
          // lists: [
          //   { title: "Numbered", value: "number" },
          //   { title: "Ordered", value: "bullet" },
          // ],

          marks: {
            // Empty array means no decorators
            decorators: [
              // { title: "Strong", value: "strong" },
              // { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
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
    defineField({
      name: "textAlign",
      title: "Content Alignment",
      type: "string",
      description: "Select alignment for content of block. Centered or Left",
      options: {
        list: ["left", "center"],
      },
      initialValue: "left",
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
