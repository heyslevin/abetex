import { Target } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const featuredProjectsType = defineType({
  name: "featuredProjects",
  type: "object",
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
      name: "Heading",
      type: "string",
      description: "Heading text above the project gallery",
      fieldset: "content",
    }),
    defineField({
      name: "itemsPerRow",
      type: "string",
      title: "Projects per row",
      fieldset: "content",
      options: {
        list: ["2", "3"],
      },
      initialValue: "3",
    }),
    defineField({
      name: "projects",
      title: "Selected projects:",
      description: 'Click "Add Item" to add projects',
      type: "array",
      fieldset: "content",
      of: [
        {
          name: "selectedProject",
          type: "reference",
          title: "Select a Project",
          to: [{ type: "project" }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
  icon: <Target size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Featured Projects",
      };
    },
  },
});
