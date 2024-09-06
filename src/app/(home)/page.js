import { sanityFetch } from "@/src/sanity/lib/client";
import React from "react";

import { HOME_PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import { COMPONENT_MAP } from "@/src/lib/frontend/constants";

async function PageBuilder({ params }) {
  const page = await sanityFetch({
    query: HOME_PAGE_BUILDER_QUERY,
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
