import * as Scrivito from "scrivito";
import { metadataAttributes } from "../_metadataAttributes";

export const SearchResults = Scrivito.provideObjClass("SearchResults", {
  attributes: {
    title: "string",
    navigationBackgroundImage: ["reference", { only: ["Image"] }],
    ...metadataAttributes,
  },
});
