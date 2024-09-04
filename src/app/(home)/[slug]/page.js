import { sanityFetch } from "@/src/sanity/lib/client";
import React from "react";

import { PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import { COMPONENT_MAP } from "@/src/lib/frontend/constants";

async function PageBuilder({ params }) {
  console.log("in slug");
  const page = await sanityFetch({
    query: PAGE_BUILDER_QUERY,
    params: { slug: params.slug },
    tags: ["pageBuilder"],
  });
  console.log({ pagedata: params.slug == "favicon.ico", pageDat2: params });
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
