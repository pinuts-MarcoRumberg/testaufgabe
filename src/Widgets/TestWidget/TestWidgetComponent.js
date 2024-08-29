import * as React from "react";
import * as Scrivito from "scrivito";

import "./TestWidget.scss";

Scrivito.provideComponent("TestWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="test-widget"
    content={widget}
    attribute="pageTitle"
  />
));
