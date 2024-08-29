import * as Scrivito from "scrivito";

export const TestWidget = Scrivito.provideWidgetClass("TestWidget", {
  attributes: {
    pageTitle: "string",
  },
  extractTextAttributes: ["pageTitle"],
});
