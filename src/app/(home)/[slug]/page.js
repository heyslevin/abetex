import React from "react";

import { PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import { COMPONENT_MAP } from "@/src/lib/frontend/constants";
import { sanityFetch } from "@/src/sanity/lib/client";

async function PageBuilder({ params }) {
  const page = await sanityFetch({
    query: PAGE_BUILDER_QUERY,
    params: { slug: params.slug },
    tags: ["pageBuilder"],
  });

  return (
    <>
      {page?.content?.map((blockObject) => {
        const BlockComponent = COMPONENT_MAP[blockObject._type];
        return <BlockComponent key={blockObject._key} data={blockObject} />;
      })}
    </>
  );
}

export default PageBuilder;
