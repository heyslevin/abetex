import { defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
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
  ],
});
