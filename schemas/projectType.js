import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import _ from "lodash";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
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
      name: "status",
      type: "string",
      fieldset: "content",
      options: {
        list: [
          { title: "Planning", value: "planning" },
          { title: "Construction", value: "construction" },
          { title: "Design", value: "design" },
          { title: "Now Selling", value: "selling" },
          { title: "Sold", value: "sold" },
        ],
      },
      initialValue: "planning",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "gallery",
      fieldset: "content",
    }),
    defineField({
      name: "projectInfo",
      type: "array",
      fieldset: "content",

      description:
        "Add as many informations points as you'd like. Examples: Description, location, amenitities, architect, etc.",
      fieldset: "content",
      initialValue: {
        // Required _type to tell the schema what fields to map
        _type: "descriptionItem",
        stringField: "Description",
      },

      of: [
        {
          name: "descriptionItem",
          type: "descriptionItem",
          description: "Add a title and text for this item",
        },
      ],
    }),
    defineField({
      name: "projectLinkArea",
      type: "projectLink",
      title: "Link to project website",
      fieldset: "content",
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
      status: "status",
    },
    prepare({ image, title, status }) {
      return {
        title: title || "Untitled",
        subtitle: _.upperFirst(status) || "No status",
        media: image,
      };
    },
  },
});
