import * as Scrivito from "scrivito";

export const TestWidget = Scrivito.provideWidgetClass("TestWidget", {
  attributes: {
    pageTitle: "string",
    buttonText: "string",
    image: ["reference", { only: "Image" }],

    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    bgColor: [
      "enum",
      { values: ["primary", "success", "info", "warning", "danger"] },
    ],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    showDividingLine: "boolean",
    showMargin: "boolean",
    text: "html",
    target: "link",

    // alignment: ["enum", { values: ["left", "center", "right"] }],
  },
  extractTextAttributes: ["pageTitle", "text"],
});
