import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const projectLink = defineType({
  name: "projectLink",
  type: "object",
  title: "Add a Link",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category", newItemPosition: "before" }),
    defineField({
      name: "externalUrl",
      type: "url",
      description: "Use fully qualified URLS for external link",
    }),
    defineField({
      name: "urlTitle",
      type: "string",
      description:
        "Optional. Title for link, otherwise link title will be: 'More information'",
    }),
    defineField({
      name: "openInNewWindow",
      type: "boolean",
      title: "Open link in new window?",
      intitialValue: true,
    }),
  ],
  options: {
    // collapsed: true,
    // collapsible: true,
  },
});
