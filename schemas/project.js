import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  type: "document",
  title: "Projects",
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
    defineField({
      name: "orderRank",
      type: "string",
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      images: "gallery",
      image: "gallery.0",
    },
    prepare({ images, image, title }) {
      return {
        title: title,
        subtitle: `${Object.keys(images).length} images`,
        media: image,
      };
    },
  },
});
