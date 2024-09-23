import { Component } from "lucide-react";
import { defineField, defineType } from "sanity";

export const brandAsset = defineType({
  name: "brandAsset",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Add your SVG asset",
    }),
    defineField({
      name: "alt",
      title: "Asset Name",
      type: "string",
      description: "Name your asset (ex. 'Logotype', 'Wordmark')",
    }),
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: name || "Untitled Asset",
        media: Component,
      };
    },
  },
});
