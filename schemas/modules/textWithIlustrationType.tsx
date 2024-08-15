import { MasterDetailIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const textWithIllustrationType = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with image",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      name: "button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Link Text",
          type: "string",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "Link url",
        }),
      ],
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
  icon: MasterDetailIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Text With Image",
        media: image || MasterDetailIcon,
      };
    },
  },
});
