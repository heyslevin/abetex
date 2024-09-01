import ArrayMaxItems from "@/components/utils/ArrayMaxItems";
import { Star, Trophy } from "lucide-react";
import { defineField, defineType } from "sanity";
import { TITLE_DESCRIPTION } from "./lib/constants";

// const dataShape = {
//   heading: "",
//   caption: "",
//   metricsGroup: [
//     {
//       metric: {
//         heading: "",
//         caption: "",
//         text: "",
//       },
//     },
//   ],
// };

export const metricsType = defineType({
  name: "metrics",
  type: "object",
  title: "Metrics",
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      type: "string",
      description: "Heading of the section",
      fieldset: "content",
    }),
    defineField({
      name: "caption",
      type: "string",
      description: "Caption above the heading",
      fieldset: "content",
    }),
    defineField({
      name: "metricsGroup",
      type: "array",
      title: "Metrics Board",
      description: "Add your individual metrics here",
      components: { input: ArrayMaxItems },
      fieldset: "content",

      of: [
        defineField({
          name: "metric",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
              description: "The big metric to show",
            }),
            defineField({
              name: "caption",
              type: "string",
              description: "Short caption below metric",
            }),
            defineField({
              name: "text",
              type: "string",
              description: "Longer text explaining the metric",
            }),
          ],
          icon: <Star size={16} />,
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  icon: <Trophy size={16} />,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Metrics",
      };
    },
  },
});
