import { client, sanityFetch } from "@/src/sanity/lib/client";
import React from "react";

import { PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import Hero from "@/components/modules/Hero";
import Carousel from "@/components/modules/Carousel";
import ParagraphSection from "@/components/modules/ParagraphSection";
import TextWithIllustration from "@/components/modules/TextWithIllustration";

const COMPONENT_MAP = {
  hero: Hero,
  textWithIllustration: TextWithIllustration,
  carousel: Carousel,
  paragraphSection: ParagraphSection,
};

async function PageBuilder() {
  const page = await sanityFetch({ query: PAGE_BUILDER_QUERY });
  return (
    <>
      {page.content.map((blockObject) => {
        const BlockComponent = COMPONENT_MAP[blockObject._type];
        return <BlockComponent key={blockObject._key} data={blockObject} />;
      })}
    </>
  );
}

export default PageBuilder;
