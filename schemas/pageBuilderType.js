import { TiersIcon } from "@sanity/icons";
import { Globe } from "lucide-react";
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
      name: "isHomepage",
      type: "boolean",
      initialValue: false,
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
        defineType({
          name: "accordion",
          type: "accordion",
        }),
        defineType({
          name: "form",
          type: "form",
        }),
      ],
    }),
  ],
  icon: Globe,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Page",
      };
    },
  },
});
