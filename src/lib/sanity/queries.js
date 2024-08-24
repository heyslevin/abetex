import { groq } from "next-sanity";

export const PAGE_BUILDER_QUERY = groq`
*[_type == "pageBuilder"] {
  title,
  slug,
  content[] {
    ...,
    "image": image {
      ...,
      "imageUrl": asset->.url
    },
    "images": images[] {
      ...,
      "imageUrl": asset->.url
    },
    tabs[] {
      ...,
      "image": image {
        ...,
        "imageUrl": asset->.url
      }
    },
    accordion[] {
      ...
    }
  }
}[0]

`;

// Missing File fetch
export const GLOBAL_SETTINGS_QUERY = groq`
*[_type == "globalSettings"] {
  socials,
  websiteTitle,
  address
}[0]

`;
