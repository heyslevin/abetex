import { groq } from "next-sanity";

const PAGE_BUILDER_CONTENT_QUERY = `
content[] {
    ...,
    defined(image) => {
      "image": image {
        ...,
        "imageUrl": asset->.url,
        "blurDataURL": asset->.metadata.lqip,
      }
    },
    defined(images) => {
      "images": images[] {
        ...,
        "imageUrl": asset->.url,
        "blurDataURL": asset->.metadata.lqip,
      }
    },
    defined(tabs) => {
      tabs[] {
        ...,
        "image": image {
          ...,
          "imageUrl": asset->.url,
          "blurDataURL": asset->.metadata.lqip,
        }
      }
    },
    defined(accordion) => {
      accordion[] {
        ...
      }
    },
    defined(projects) => {
      title,
      projects[]-> {
        gallery,
        title,
        caption,
        defined(projectLinkArea.externalUrl) => {
          "url": projectLinkArea.externalUrl
        },
        gallery[] {
          _key,
          alt,
          "imageUrl": asset->.url,
          "blurDataURL": asset->.metadata.lqip,
        }
      }
    }
  }
`;
export const HOME_PAGE_BUILDER_QUERY = groq`
*[_type == "pageBuilder" && isHomepage == true] {
  title,
  slug,
  ${PAGE_BUILDER_CONTENT_QUERY}
  
}[0]
`;

export const PAGES_QUERY = groq`*[_type == "pageBuilder" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const PAGE_BUILDER_QUERY = groq`
*[_type == "pageBuilder" && slug.current == $slug] {
  title,
  slug,
  ${PAGE_BUILDER_CONTENT_QUERY}
}[0]

`;

export const HOMEPAGE_QUERY = groq`
  *[isHomepage == true]{'slug':slug.current, _id}[0]
`;

export const LOAD_ALL_PROJECTS_QUERY = groq`
*[_type == "project"] {
  gallery,
  title,
  caption,
  defined(projectLinkArea.externalUrl) => {
    "url": projectLinkArea.externalUrl
  },
  gallery[] {
    alt,
    "imageUrl": asset->.url,
    "blurDataURL": asset->.metadata.lqip,
  }
}

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
