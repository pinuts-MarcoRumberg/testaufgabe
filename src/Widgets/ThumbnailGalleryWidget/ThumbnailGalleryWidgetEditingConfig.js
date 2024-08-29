import * as Scrivito from "scrivito";
import thumbnailGalleryWidgetIcon from "../../assets/images/thumbnail_gallery_widget.svg";

Scrivito.provideEditingConfig("ThumbnailGalleryWidget", {
  title: "Thumbnail Gallery",
  thumbnail: thumbnailGalleryWidgetIcon,
  attributes: {
    images: {
      title: "Images",
    },
    showTags: {
      title: "Show list of tags?",
      description: "Default: No",
    },
  },
  properties: ["images", "showTags"],
  validations: [
    [
      "images",

      (images) => {
        if (images.length < 1) {
          return {
            message: "The thumbnail gallery should contain at least one image.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
