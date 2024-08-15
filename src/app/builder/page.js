import { client, sanityFetch } from "@/src/sanity/lib/client";
import React from "react";

import { PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import Hero from "@/components/modules/Hero";
import TextWithIllustration from "@/components/modules/TextWithIllustration";
import Carousel from "@/components/modules/Carousel";

const COMPONENT_MAP = {
  hero: Hero,
  textWithIllustration: TextWithIllustration,
  carousel: Carousel,
};

async function PageBuilder() {
  const page = await sanityFetch({ query: PAGE_BUILDER_QUERY });
  console.log(page);
  return (
    <>
      {page.content.map((blockObject) => {
        //   Correct here.
        const BlockComponent = COMPONENT_MAP[blockObject._type];
        return <BlockComponent key={blockObject._key} data={blockObject} />;
      })}
    </>
  );
}

export default PageBuilder;
