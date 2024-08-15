import { LetterText } from "lucide-react";
import { defineField, defineType } from "sanity";

export const paragraphSectionType = defineType({
  name: "paragraphSection",
  type: "object",
  title: "Paragraph Section",
  fields: [
    defineField({
      name: "description",
      type: "string",
      title: "Paragraph description",
      description: "Optional block description for internal use",
    }),
    defineField({
      name: "textBlock",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "button",
      type: "object",
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
      title: "description",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Paragraph Section",
      };
    },
  },
});
