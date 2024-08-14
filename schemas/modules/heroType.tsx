import { DocumentTextIcon, StarFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "caption",
      type: "string",
    }),
    defineField({
      name: "button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          type: "string",
        }),
        defineField({
          name: "link",
          type: "url",
        }),
      ],
    }),
  ],
  icon: StarFilledIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Hero",
        media: StarFilledIcon,
      };
    },
  },
});
