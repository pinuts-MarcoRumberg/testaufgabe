import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("TestWidget", {
  title: "Test",
  attributes: {
    buttonText: {
      title: "Button Text",
    },
    target: {
      title: "Target",
      description: "The target and text of the button.",
    },
    style: {
      title: "Style",
      description: "Size and font of this page title. Default: Heading 2",
      values: [
        { value: "h1", title: "Heading 1" },
        { value: "h2", title: "Heading 2" },
        { value: "h3", title: "Heading 3" },
        { value: "h4", title: "Heading 4" },
        { value: "h5", title: "Heading 5" },
        { value: "h6", title: "Heading 6" },
      ],
    },
    bgColor: {
      title: "Background color",
      description: "The background color of the page title text",
    },
    level: {
      title: "Heading tag (optional)",
      description:
        "May be used for SEO, for generating a table of contents," +
        " or for improving accessibility. Default: Derived from Style",
      values: [
        { value: "h1", title: "h1" },
        { value: "h2", title: "h2" },
        { value: "h3", title: "h3" },
        { value: "h4", title: "h4" },
        { value: "h5", title: "h5" },
        { value: "h6", title: "h6" },
      ],
    },
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
    },
    showMargin: {
      title: "Show margin?",
      description: "A margin adds space around this page title. Default: Yes",
    },
  },
  properties: [
    "style",
    "level",
    "alignment",
    "showDividingLine",
    "showMargin",
    "buttonText",
  ],
  initialContent: {
    alignment: "left",
    pageTitle: "Lorem Ipsum",
    showMargin: true,
    style: "h2",
    buttonText: "click me",
  },
  validations: [
    [
      "pageTitle",

      (pageTitle) => {
        if (!pageTitle) {
          return { message: "The pageTitle must be set.", severity: "error" };
        }
      },
    ],
  ],
});
