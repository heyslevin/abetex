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
  ],
});
