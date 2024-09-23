import { ASYNC_PAGE_SECTION_QUERY } from "@/src/lib/sanity/queries";
import { useState, useEffect } from "react";
import { useClient, useFormValue } from "sanity";

const AsyncSelect = (props) => {
  const [listItems, setListItems] = useState([]);
  const [fullItems, setFullItems] = useState([]);
  const { schemaType, renderDefault, path } = props;
  const { options } = schemaType;
  const internalLink = useFormValue([...path.slice(0, -2), "internalLink"]);

  const studioClient = useClient({ apiVersion: "2024-08-01" });

  function formatSections(sections) {
    return sections.map((section) => {
      return {
        title: section.title
          ? `${section.title} (${_.startCase(section.type)})`
          : `${_.startCase(section.type)}`,
        value: _.kebabCase(section.title),
      };
    });
  }

  useEffect(() => {
    const getSections = async () => {
      await studioClient
        .fetch(ASYNC_PAGE_SECTION_QUERY, {
          id: internalLink._ref ? internalLink._ref : "",
        })
        .then((data) => {
          setFullItems(data);
          return data;
        })
        .then((data) => formatSections(data))
        .then((data) => setListItems(data));
    };

    getSections();
  }, [internalLink, studioClient]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });
};

export default AsyncSelect;
