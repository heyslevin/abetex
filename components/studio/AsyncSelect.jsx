import { client } from "@/src/sanity/lib/client";
import { Stack, Text } from "@sanity/ui";
import _ from "lodash";
import { useState, useEffect } from "react";
import { useFormValue } from "sanity";

const studioClient = client.withConfig({ apiVersion: "2024-08-01" });

const AsyncSelect = (props) => {
  const [listItems, setListItems] = useState([]);
  const { schemaType, renderDefault, path } = props;
  const { options } = schemaType;
  const internalLink = useFormValue([...path.slice(0, -2), "internalLink"]);

  function formatSections(sections) {
    return sections.map((section) => {
      return {
        title: section.heading
          ? `${_.startCase(section.type)} : ${section.heading}`
          : `${_.startCase(section.type)}`,
        value: section._key,
      };
    });
  }

  useEffect(() => {
    console.log([...path.slice(0, -2), "internalLink"]);
    console.log({ path });
    const getSections = async () => {
      await studioClient
        .fetch(
          `
            *[_type == 'pageBuilder' && _id == $id] {
              content[] {
                _key,
                heading,
                "type": _type
              }
            }[0].content
            `,
          {
            id: internalLink._ref ? internalLink._ref : "",
          },
        )
        .then((data) => {
          console.log("fetched", data);
          const formattedData = formatSections(data);
          console.log("formatted data", formattedData);
          setListItems(formattedData);
        });
    };

    getSections();
  }, [internalLink]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });
};

export default AsyncSelect;
