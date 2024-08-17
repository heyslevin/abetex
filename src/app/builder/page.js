import { client, sanityFetch } from "@/src/sanity/lib/client";
import React from "react";

import { PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import Hero from "@/components/modules/Hero";
import Carousel from "@/components/modules/Carousel";
import ParagraphSection from "@/components/modules/ParagraphSection";
import TextWithImage from "@/components/modules/TextWithImage";
import Metrics from "@/components/modules/Metrics";
import Tabs from "@/components/modules/Tabs";

const COMPONENT_MAP = {
  hero: Hero,
  textWithImage: TextWithImage,
  carousel: Carousel,
  paragraphSection: ParagraphSection,
  metrics: Metrics,
  tabs: Tabs,
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
