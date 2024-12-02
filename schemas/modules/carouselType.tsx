import { GalleryThumbnails } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const carouselType = defineType({
  name: "carousel",
  type: "object",
  title: "Image Gallery",
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
      name: "style",
      type: "string",
      description: "Choose a visual style for this block",
      options: {
        list: [
          { title: "Full Width Image", value: "full-width" },
          { title: "Default", value: "default" },
        ],
      },
      initialValue: "full-width",
    }),
    defineField({
      name: "images",
      type: "array",
      fieldset: "content",
      validation: (rule) => rule.required(),
      of: [
        defineField({
          name: "image",
          type: "image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative Text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "backgroundColor",
      type: "string",
      options: {
        list: ["primary", "secondary"],
      },
    }),
  ],
  icon: <GalleryThumbnails size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Image Carousel",
      };
    },
  },
});
