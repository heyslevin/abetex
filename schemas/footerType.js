import AsyncSelectBrandAsset from "@/components/studio/AsyncSelectBrandAsset";
import { PanelBottom } from "lucide-react";
import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    defineField({
      name: "brandAsset",
      title: "Navigation Logo",
      type: "string",
      components: {
        input: AsyncSelectBrandAsset,
      },
    }),
  ],
  icon: PanelBottom,
});
