import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { PanelBottom, PanelTop, Settings, Target } from "lucide-react";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // Remove Singletons from list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["globalSettings", "footer", "header", "project"].includes(
            listItem.getId(),
          ),
      ),
      S.divider(),

      // Optional configuration
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        icon: Target,
        menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
        // pass from the structure callback params above
        S,
        context,
      }),
      S.divider(),
      //Singletons Below
      S.listItem()
        .title("Header Navigation")
        .icon(PanelTop)
        .child(
          S.document()
            .schemaType("header")
            .documentId("header")
            .title("Header Navigation"),
        ),
      S.listItem()
        .title("Footer")
        .icon(PanelBottom)
        .child(
          S.document()
            .schemaType("footer")
            .documentId("footer")
            .title("Footer Settings"),
        ),
      S.listItem()
        .title("Global Settings")
        .icon(Settings)
        .child(
          S.document()
            .schemaType("globalSettings")
            .documentId("globalSettings"),
        ),
    ]);
