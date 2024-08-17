import ArrayMaxItems from "@/components/utils/ArrayMaxItems";
import { Star, Trophy } from "lucide-react";
import { defineField, defineType } from "sanity";

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
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "Heading of the section",
    }),
    defineField({
      name: "caption",
      type: "string",
      description: "Caption above the heading",
    }),
    defineField({
      name: "metricsGroup",
      type: "array",
      title: "Metrics Board",
      description: "Add your individual metrics here",
      components: { input: ArrayMaxItems },

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
    prepare() {
      return {
        title: "Metric Board",
        subtitle: "Metrics",
      };
    },
  },
});
