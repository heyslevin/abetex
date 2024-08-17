import { TiersIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "document",
  title: "Page Builder",
  icon: TiersIcon,
  fields: [
    defineType({
      name: "title",
      type: "string",
    }),
    defineType({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      hidden: ({ document }) => !document?.title,
    }),
    defineType({
      name: "content",
      type: "array",
      of: [
        defineType({
          name: "hero",
          type: "hero",
        }),
        defineType({
          name: "textWithImage",
          type: "textWithImage",
        }),
        defineType({
          name: "carousel",
          type: "carousel",
        }),
        defineType({
          name: "paragraphSection",
          type: "paragraphSection",
        }),
        defineType({
          name: "metrics",
          type: "metrics",
        }),
        defineType({
          name: "tabs",
          type: "tabs",
        }),
      ],
    }),
  ],
});
