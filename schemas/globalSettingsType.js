import { Settings } from "lucide-react";
import { defineField, defineType } from "sanity";

// const data = {
//   siteTitle,
//   Address,
//   Socials: {
//     instagram,
//     linkedIn,
//     X,
//   },
//   privatePolicy,
//   Legal: defineField({
//     name: "pdfFile",
//     type: "file",
//     options: {
//       accept: "application/pdf",
//     },
//   }),

export const globalSettingsType = defineType({
  name: "globalSettings",
  type: "document",
  fields: [
    defineField({
      name: "websiteTitle",
      type: "string",
    }),
    defineField({
      name: "address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "socials",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          type: "url",
        }),
        defineField({
          name: "linkedIn",
          type: "url",
        }),
        defineField({
          name: "x",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "privacyPolicy",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "legal",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
  ],
  icon: Settings,
});
