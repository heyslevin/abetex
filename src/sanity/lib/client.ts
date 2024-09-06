

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "development" ? true : false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,

export async function sanityFetch({ query, params = {}, tags }) {
  return client.fetch(query, params, {
    cache: "force-cache",
    next: {
      tags,
    },
  });
}
