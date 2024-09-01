import { MasterDetailIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const textWithImageType = defineType({
  name: "textWithImage",
  type: "object",
  title: "Text with image",
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
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "button",
      type: "object",
      fieldset: "content",
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
      fieldset: "content",
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
      title: "title",
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
