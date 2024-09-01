import { groq } from "next-sanity";

export const PAGE_BUILDER_QUERY = groq`
*[_type == "pageBuilder"] {
  title,
  slug,
  content[] {
    ...,
    defined(image) => {
      "image": image {
        ...,
        "imageUrl": asset->.url
      }
    },
    defined(images) => {
      "images": images[] {
        ...,
        "imageUrl": asset->.url
      }
    },
    defined(tabs) => {
      tabs[] {
        ...,
        "image": image {
          ...,
          "imageUrl": asset->.url
        }
      }
    },
    defined(accordion) => {
      accordion[] {
        ...
      }
    }
  }
}[0]

`;

export const HEADER_NAVIGATION_QUERY = groq`
*[_type == "header"] {
  navItems[] {
    text,
    title,
    _key,
    defined(navigationItemUrl.internalLink) => {
      "typeOfLink": navigationItemUrl.typeOfLink,
      "slug": navigationItemUrl.internalLink->slug.current,
      "pagePortionKey": navigationItemUrl.linkToPortion.pagePortionKey
    },
    defined(navigationItemUrl.externalUrl) => {
      "typeOfLink": navigationItemUrl.typeOfLink,
      "externalUrl": navigationItemUrl.externalUrl
    }
  }
}[0]
`;

export const ASYNC_PAGE_SECTION_QUERY = groq`
            *[_type == 'pageBuilder' && _id == $id] {
              content[] {
                _key,
                heading,
                title,
                "type": _type
              }
            }[0].content`;

// Missing File fetch
export const GLOBAL_SETTINGS_QUERY = groq`
  *[_type == "globalSettings"] {
    socials,
    websiteTitle,
    address
  }[0]

`;
