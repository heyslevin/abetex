import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const projectLink = defineType({
  name: "projectLink",
  type: "object",
  title: "Project Link",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category", newItemPosition: "before" }),
    defineField({
      name: "externalUrl",
      type: "url",
      description: "Use fully qualified URLS for external link",
    }),
    defineField({
      name: "openInNewWindow",
      type: "boolean",
      title: "Open link in new window?",
      intitialValue: false,
    }),
  ],
  options: {
    collapsed: true,
    collapsible: true,
  },
});
