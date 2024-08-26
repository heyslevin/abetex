import { Link } from "lucide-react";
import { defineField, defineType } from "sanity";

export const navigationItemType = defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: Link,
  fields: [
    {
      name: "text",
      type: "string",
      title: "Navigation Text",
    },
    defineField({
      name: "navigationItemUrl",
      type: "link",
      title: "Navigation Item Url",
    }),
  ],
});
