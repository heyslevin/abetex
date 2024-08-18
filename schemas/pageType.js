import { defineType, defineField, defineArrayMember } from "sanity";
import { CalendarIcon, DocumentTextIcon } from "@sanity/icons";
import { LayoutPanelTop } from "lucide-react";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Static Page",
  icon: LayoutPanelTop,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
      ],
    }),
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "caption",
      type: "string",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "textBlock",
      title: "Text block",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "textBlockLink",
      title: "Text block link",
      type: "url",
    }),
    defineField({
      name: "textBlockLinkTitle",
      title: "Link Title",
      type: "string",
    }),
  ],
});
