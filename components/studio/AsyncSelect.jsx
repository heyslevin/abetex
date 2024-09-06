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
    console.log({ sections });
    return sections.map((section) => {
      console.log(section);
      return {
        title: section.title
          ? `${section.title} (${_.startCase(section.type)})`
          : `${_.startCase(section.type)}`,
        value: _.kebabCase(section.title),
      };
    });
  }

  useEffect(() => {
    console.log([...path.slice(0, -2), "internalLink"]);
    console.log({ path });
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
  }, [internalLink]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });

  //   return (
  //     <Box padding={4}>
  //       <Card radius={3} shadow={2}>
  //         <MenuButton
  //           button={<Button text="Select a section" />}
  //           id="options-button"
  //           menu={
  //             <Menu>
  //               {fullItems.map((item) => (
  //                 <MenuItem fontSize={1}>
  //                   {/* {item._key} */}
  //                   <Box padding={1}>
  //                     <Box>
  //                       <Globe size={16} />
  //                     </Box>
  //                     <Stack space={1}>
  //                       <Text fontSize={1} weight="semibold">
  //                         {item.type}
  //                       </Text>
  //                       <Text muted size={1}>
  //                         {item.heading}
  //                       </Text>
  //                     </Stack>
  //                   </Box>
  //                 </MenuItem>
  //               ))}
  //             </Menu>
  //           }
  //         ></MenuButton>
  //       </Card>
  //     </Box>
  //   );
};

export default AsyncSelect;
