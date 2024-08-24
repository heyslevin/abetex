import { ZOD_SCHEMA_TYPES } from "./constants";

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
  const dataWithSchema = data.map((item) => ({
    ...item,
    type: ZOD_SCHEMA_TYPES[item.type],
  }));

  const defaultValuesArray = data.map((item) =>
    item.defaultValue
      ? { [item.title]: item.defaultValue }
      : { [item.title]: "" },
  );

  const formSchema = Object.assign({}, ...dataWithSchema);
  const defaultValues = Object.assign({}, ...defaultValuesArray);

  return { formSchema, defaultValues };
}
