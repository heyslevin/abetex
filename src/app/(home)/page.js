import React from "react";

import { HOME_PAGE_BUILDER_QUERY } from "@/src/lib/sanity/queries";
import { COMPONENT_MAP } from "@/src/lib/frontend/constants";
import { sanityFetchv2 } from "@/src/sanity/lib/newclient";

async function PageBuilder({ params }) {
  const page = await sanityFetchv2({
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
