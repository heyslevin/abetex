import { groq } from "next-sanity";

const PAGE_BUILDER_CONTENT_QUERY = groq`
        defined(projectLinkArea.externalUrl) => {
          "url": projectLinkArea.externalUrl,
            openInNewWindow,
        },content[] {
  ...,
  defined(image) => {
    "image": image {
      ...,
      "imageUrl": asset->.url,
      "blurDataURL": asset->.metadata.lqip
    }
  },
  defined(images) => {
    "images": images[] {
      ...,
      "imageUrl": asset->.url,
      "blurDataURL": asset->.metadata.lqip
    }
  },
  defined(tabs) => {
    tabs[] {
      ...,
      "image": image {
        ...,
        "imageUrl": asset->.url,
        "blurDataURL": asset->.metadata.lqip
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
    heading,
    projects[]-> {
      gallery,
      projectInfo[] {
        title,
        text
      },
      title,
      status,
      defined(projectLinkArea.externalUrl) => {
        "url": projectLinkArea.externalUrl,
        openInNewWindow,
        urlTitle,
      },
      gallery[] {
        _key,
        alt,
        "imageUrl": asset->.url,
        "blurDataURL": asset->.metadata.lqip
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

// To use Brand Asset, first Query the type of document.
// Example:
// *[_type == "header"] {
const BRAND_ASSET_QUERY = groq`
  brandAsset,  // This will hold the asset reference
  "selectedAsset": *[_type == "globalSettings"][0].brandAssets[image.asset._ref == ^.brandAsset][0] {
    name,
    "imageUrl": image.asset->url,
    "blurDataURL": image.asset->metadata.lqip
  },
  "websiteTitle": *[_type == "globalSettings"][0].websiteTitle
  `;

export const HEADER_NAVIGATION_QUERY = groq`
*[_type == "header"] {
  ${BRAND_ASSET_QUERY},
  navItems[] {
    text,
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

export const FOOTER_QUERY = groq`
*[_type == "footer"] {
  ${BRAND_ASSET_QUERY},
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
export const CONTACT_EMAIL_QUERY = groq`
*[_type == "globalSettings"][0].contactEmail

`;
