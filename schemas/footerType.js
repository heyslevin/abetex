import { PanelBottom } from "lucide-react";
import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
  icon: PanelBottom,
});
