import { ListCollapse } from "lucide-react";
import { defineField, defineType } from "sanity";

export const accordionType = defineType({
  name: "accordion",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "A name your accordion for internal use",
    }),
    defineField({
      name: "accordionItems",
      type: "array",
      of: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        },
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
