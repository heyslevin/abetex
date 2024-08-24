import { SquarePen, TextCursor, TextCursorInput } from "lucide-react";
import { defineField, defineType } from "sanity";

export const formType = defineType({
  name: "form",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "text",
      type: "text",
      rows: 3,
      description: "Optional text below header",
    }),
    defineField({
      name: "items",
      type: "array",
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
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Form",
      };
    },
  },
});
