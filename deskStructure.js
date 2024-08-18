import { Settings, Settings2 } from "lucide-react";

export const myStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !["globalSettings"].includes(listItem.getId()),
      ),
      S.divider(),
      S.listItem()
        .title("Global Settings")
        .icon(Settings)
        .child(
          S.document()
            .schemaType("globalSettings")
            .documentId("globalSettings"),
        ),
    ]);
