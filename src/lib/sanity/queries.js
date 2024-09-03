import { groq } from "next-sanity";
export const HOME_PAGE_BUILDER_QUERY = groq`
*[_type == "pageBuilder" && isHomepage == true] {
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
}[0]`;

export const PAGE_BUILDER_QUERY = groq`
*[_type == "pageBuilder" && slug.current == $slug] {
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

export const HOMEPAGE_QUERY = groq`
  *[isHomepage == true]{'slug':slug.current, _id}
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
    "homepage-id":homepage->_id,
    socials,
    websiteTitle,
    address
  }[0]

`;
