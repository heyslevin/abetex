import MyPrefixedSlug from "@/components/studio/MyPrefixedSlug";
import { DocumentTextIcon, StarFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
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
    }),
    defineField({
      name: "slug",
      type: "slug",
      description:
        "Used for linking to this portion of the site. Click Generate to create.",
      fieldset: "settings",
      hidden: true,
      options: {
        source: (doc, context) => context.parent.title,
      },
    }),
    defineField({
      name: "heading",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "tagline",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "caption",
      type: "string",
      fieldset: "content",
    }),
    defineField({
      name: "button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          type: "string",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "Link url",
        }),
      ],
      fieldset: "content",
    }),
  ],
  icon: StarFilledIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Hero",
      };
    },
  },
});
