import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "alt",
      type: "string",
      description: "Alt text to describe image",
    }),
  ],
});
