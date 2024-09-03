import _ from "lodash";
import { ZOD_SCHEMA_TYPES } from "./constants";
import { z } from "zod";

// Expected data Structure:
//     {
//       title: "name",
//       type: "text",
//      defaultValue: "";
//     },
//     {
//       title: "phone",
//       type: "phone",
//      defaultValue: "";
//     },

export function zodFormatter(data) {
  // const dataWithSchema = data.map((item) => ({
  //   ...item,
  //   type: ZOD_SCHEMA_TYPES[item.type],
  // }));

  const formSchemaObject = {};
  const defaultValues = {};

  data.forEach((item) => {
    const title = _.camelCase(item.title);
    console.log(ZOD_SCHEMA_TYPES[item.type].toString());
    // Create Zod schema entry
    formSchemaObject[title] = ZOD_SCHEMA_TYPES[item.type];

    // Set default value
    defaultValues[title] = "";
  });

  // Create Zod schema
  const formSchema = z.object(formSchemaObject);

  return { formSchema, defaultValues };
}
