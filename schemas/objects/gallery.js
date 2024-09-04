import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  type: "array",
  title: "Gallery",
  description: "Add or drag & drop images. First image will be the main image",
  of: [
    defineField({
      name: "galleryImage",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          description: "Alt text to describe image",
          initialValue: "Project Image",
        },
      ],
    }),
  ],
});
