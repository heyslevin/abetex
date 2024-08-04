import { defineType, defineField } from "sanity";
import { CalendarIcon, DocumentTextIcon } from "@sanity/icons";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: DocumentTextIcon,
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
  ],
});
