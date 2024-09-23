import { ASYNC_PAGE_SECTION_QUERY } from "@/src/lib/sanity/queries";
import { useState, useEffect } from "react";
import { useClient, useFormValue } from "sanity";

const AsyncSelectBrandAsset = (props) => {
  const [listItems, setListItems] = useState([]);
  const [rawData, setRawData] = useState([]);
  const { schemaType, renderDefault, path } = props;
  const { options } = schemaType;

  const studioClient = useClient({ apiVersion: "2024-08-01" });

  function formatData(data) {
    return data.brandAssets?.map((asset) => {
      return {
        title: asset.name,
        value: asset.image.asset._ref,
      };
    });
  }

  useEffect(() => {
    const getSections = async () => {
      await studioClient
        .fetch(`*[_type == "globalSettings"][0]{brandAssets}`)
        .then((data) => formatData(data))
        .then((data) => setListItems(data));
    };

    getSections();
  }, []);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });
};

export default AsyncSelectBrandAsset;
