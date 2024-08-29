import * as React from "react";
import * as Scrivito from "scrivito";

import "./TestWidget.scss";
import speakingurl from "speakingurl";
import { alignmentClassName } from "../../utils/alignmentClassName";
import { AnimateOnReveal } from "../../Components/AnimateOnReveal";
import { WrapIfClassName } from "../../Components/WrapIfClassName";
import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent(
  "TestWidget",
  ({ widget }) => {
    const style = widget.get("style") || "h2";
    const level = widget.get("level") || style;
    const classNames = [style];
    const target = widget.get("target");
    let btnText = target && target.title();
    if (!btnText) {
      btnText = (
        <InPlaceEditingPlaceholder>click me.</InPlaceEditingPlaceholder>
      );
    }

    const btnClassNames = ["btn"];
    classNames.push(widget.get("style") || "btn-primary");

    const alignment = alignmentClassName(widget.get("alignment"));
    if (alignment) classNames.push(alignment);

    if (widget.get("showDividingLine")) classNames.push("b-bottom");
    if (!widget.get("showMargin")) classNames.push("no-margin");
    let image = (
      <Scrivito.ImageTag
        content={widget}
        attribute="image"
        alt={alternativeText(widget)}
      />
    );

    const link = widget.get("link");
    if (link && !Scrivito.isInPlaceEditingActive()) {
      image = <Scrivito.LinkTag to={link}>{image}</Scrivito.LinkTag>;
    }
    return (
      <>
        {" "}
        {/* image */}
        <AnimateOnReveal>
          <div className={alignmentClassName(widget.get("alignment"))}>
            {image}
          </div>
        </AnimateOnReveal>
        {/* title */}
        <Scrivito.ContentTag
          tag={level}
          content={widget}
          attribute="pageTitle"
          className={classNames.join(" ")}
          id={speakingurl(widget.get("pageTitle"))}
        />
        {/* text */}
        <Scrivito.ContentTag
          tag="div"
          className={alignmentClassName(widget.get("alignment"))}
          content={widget}
          attribute="text"
        />
        {/* button */}
        <WrapIfClassName className={alignmentClassName(alignment)}>
          <Scrivito.LinkTag
            to={target}
            className={btnClassNames.join(" ")}
            attribute="buttonText"
          >
            {"🚀 "}
            {btnText}
            <i className="fa fa-angle-right fa-4" aria-hidden="true" />
          </Scrivito.LinkTag>
        </WrapIfClassName>
      </>
    );
  }
  // <Scrivito.ContentTag
  //   className="test-widget"
  //   content={widget}
  //   attribute="pageTitle"
  // />
);
function alternativeText(widget) {
  const widgetAlternativeText = widget.get("alternativeText");
  if (widgetAlternativeText) return widgetAlternativeText;

  const image = widget.get("image");
  if (image) return image.get("alternativeText");

  return "";
}
