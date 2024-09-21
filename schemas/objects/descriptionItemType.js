import { Text } from "lucide-react";
import { defineType } from "sanity";

export const descriptionItemType = defineType({
  name: "descriptionItem",
  title: "Description Item",
  type: "object",
  icon: Text,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "text",
      type: "text",
      rows: 5,
    },
  ],
  preview: {
    select: {
      title: "title",
      text: "text",
    },
    prepare({ title, text }) {
      return {
        title: title,
        subtitle: text,
      };
    },
  },
});
