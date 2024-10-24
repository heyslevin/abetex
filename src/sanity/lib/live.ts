import { defineLive } from "next-sanity";
import { client } from "@/src/sanity/lib/client";
import { token } from "@/src/sanity/lib/token";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
});
