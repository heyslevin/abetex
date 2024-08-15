import { GalleryThumbnails } from "lucide-react";
import { defineField, defineType } from "sanity";

export const carouselType = defineType({
  name: "carousel",
  type: "object",
  title: "Image Carousel",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "images",
      type: "array",
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
