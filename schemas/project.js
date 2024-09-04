import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  type: "document",
  title: "Projects",
  orderings: [orderRankOrdering],
  fieldsets: [
    { name: "content", title: "Content" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    //Title, caption, Description, link to live project, gallery object, status
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      fieldset: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "gallery",
      type: "gallery",
    }),
    defineField({
      name: "projectLinkArea",
      type: "projectLink",
      title: "Link to project website",
      description: "Optional",
    }),
    // For orderable Desk
    orderRankField({ type: "project", newItemPosition: "before" }),
  ],
  preview: {
    select: {
      title: "title",
      images: "gallery",
      image: "gallery.0.asset",
    },
    prepare({ images, image, title }) {
      return {
        title: title || "Untitled",
        subtitle: images ? `${Object.keys(images).length} images` : "No images",
        media: image,
      };
    },
  },
});
