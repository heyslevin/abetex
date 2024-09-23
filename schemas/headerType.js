import AsyncSelectBrandAsset from "@/components/studio/AsyncSelectBrandAsset";
import { defineField, defineType } from "sanity";

import { useClient } from "sanity";

export const headerType = defineType({
  name: "header",
  type: "document",
  title: "Header Navigation",
  fields: [
    defineField({
      name: "navItems",
      type: "array",
      title: "Navigation Items",
      of: [{ type: "navigationItem" }],
    }),
    // defineField({
    //   name: "navLogo",
    //   title: "Navigation Logo",
    //   type: "reference",
    //   to: [{ type: "brandAsset" }],
    // }),
    defineField({
      name: "brandAsset",
      title: "Navigation Logo",
      type: "string",
      components: {
        input: AsyncSelectBrandAsset,
      },
    }),
  ],
});
