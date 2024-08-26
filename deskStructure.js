import { PanelBottom, PanelTop, Settings, Settings2 } from "lucide-react";

export const myStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["globalSettings", "footer", "header"].includes(listItem.getId()),
      ),
      S.divider(),
      S.listItem()
        .title("Header Navigation")
        .icon(PanelTop)
        .child(S.document().schemaType("header").documentId("header")),
      S.listItem()
        .title("Footer")
        .icon(PanelBottom)
        .child(S.document().schemaType("footer").documentId("footer")),
      S.listItem()
        .title("Global Settings")
        .icon(Settings)
        .child(
          S.document()
            .schemaType("globalSettings")
            .documentId("globalSettings"),
        ),
    ]);
