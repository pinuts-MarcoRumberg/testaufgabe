import * as React from "react";
import * as Scrivito from "scrivito";

export const Sidebar = Scrivito.connect(function Sidebar() {
  const root = Scrivito.Obj.root();
  if (!root) {
    return null;
  }
  return <Scrivito.ContentTag content={root} attribute="sidebar" />;
});
