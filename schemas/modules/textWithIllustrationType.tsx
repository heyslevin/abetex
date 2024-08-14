import { MasterDetailIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const textWithIllustrationType = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with illustration",
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
          name: "link",
          type: "url",
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
        subtitle: "Text With Illustration",
        media: image || MasterDetailIcon,
      };
    },
  },
});
