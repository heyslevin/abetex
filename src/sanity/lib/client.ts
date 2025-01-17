// ./src/sanity/lib/client.ts

import "server-only";

import { createClient, QueryOptions, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/studio",
  },
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  console.log({ sanityFetchTags: tags });
  const isDraftMode = (await draftMode()).isEnabled;

  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let queryOptions: QueryOptions = {};
  let maybeRevalidate = revalidate;

  if (isDraftMode) {
    queryOptions.token = token;
    queryOptions.perspective = "previewDrafts";
    queryOptions.stega = true;
    console.log("Draft mode is enabled:", isDraftMode);

    maybeRevalidate = 0; // Do not cache in Draft Mode
  } else if (tags.length) {
    maybeRevalidate = 30; // Cache indefinitely if tags supplied
  }

  return client.fetch<QueryResponse>(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  });
}

//prev Config
// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: process.env.NODE_ENV === "development" ? true : false, // Set to false if statically generating pages, using ISR or tag-based revalidation
// });

// // revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,

// export async function sanityFetch({ query, params = {}, tags }) {
//   return client.fetch(query, params, {
//     cache: "force-cache",
//     next: {
//       tags,
//     },
//   });
