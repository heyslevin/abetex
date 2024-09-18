import { GalleryThumbnails } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const carouselType = defineType({
  name: "carousel",
  type: "object",
  title: "Image Carousel",
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
