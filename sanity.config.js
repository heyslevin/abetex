"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";
import { myStructure } from "./deskStructure";
import { patchReferenceAction } from "./src/sanity/lib/actions";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: myStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    actions: (prev, context) => {
      return context.schemaType == "globalSettings"
        ? prev.map((originalAction) =>
            originalAction.action === "publish"
              ? patchReferenceAction(originalAction, context)
              : originalAction,
          )
        : prev;
    },
  },
});
