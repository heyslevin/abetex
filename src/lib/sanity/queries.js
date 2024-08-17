import { groq } from "next-sanity";

export const PAGE_BUILDER_QUERY = groq`
*[_type == 'pageBuilder']{
title, 
slug, 
content[]{
    ...,
  "image": image{
    ...,
    'imageUrl': asset->url
  },
  "images": images[]{
    ...,
    'imageUrl': asset->url
  },
  tabs[]{
    ...,
  "image": image{
    ...,
    'imageUrl': asset->url
  }
  }

  
    
  }

  
}

[0]`;
