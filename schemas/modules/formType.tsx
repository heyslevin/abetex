import { SquarePen, TextCursor, TextCursorInput } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const formType = defineType({
  name: "form",
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
      name: "text",
      type: "text",
      rows: 3,
      description: "Optional text below header",
      fieldset: "content",
    }),
    defineField({
      name: "phone",
      title: "Phone number",
      description: "Used for Schedule a Call Button",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "items",
      type: "array",
      fieldset: "content",
      of: [
        defineField({
          name: "formItems",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Input title",
              type: "string",
              description: "Name of the input",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "type",
              title: "Input type",
              type: "string",
              description: "Type of input can be text, email, phone or number",
              initialValue: "text",
              options: {
                list: ["text", "email", "phone", "number"],
              },
            }),
            defineField({
              name: "placeholder",
              title: "Input Placeholder",
              type: "string",
            }),
            defineField({
              name: "defaultValue",
              title: "Input Default Value",
              type: "string",
              description: "Optional default value within input",
              hidden: true,
            }),
          ],
          icon: TextCursor,
        }),
      ],
    }),
  ],
  icon: <TextCursorInput size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Form",
      };
    },
  },
});
