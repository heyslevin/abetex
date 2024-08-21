import { Settings } from "lucide-react";
import { defineField, defineType } from "sanity";
import MyPrefixedSlug from "@/components/studio/MyPrefixedSlug";

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
      description: "Add your social media handles",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          type: "string",
          components: {
            input: MyPrefixedSlug,
          },
          options: {
            urlPrefix: "instagram.com/",
            maxLength: 30,
          },
        }),
        defineField({
          name: "linkedIn",
          type: "string",
          components: {
            input: MyPrefixedSlug,
          },
          options: {
            urlPrefix: "linkedin.com/",
            maxLength: 30,
          },
        }),
        defineField({
          name: "x",
          type: "string",
          components: {
            input: MyPrefixedSlug,
          },
          options: {
            urlPrefix: "x.com/",
            maxLength: 30,
          },
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
