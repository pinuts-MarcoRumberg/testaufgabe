import * as React from "react";
import * as Scrivito from "scrivito";

function Icon({ icon, size, title }) {
  const actualIcon = icon || "fa-coffee";
  return (
    <i
      className={["fa", actualIcon, size].join(" ")}
      aria-hidden="true"
      title={title}
    />
  );
}

export function IconComponent({ icon, size, link }) {
  if (!link) return <Icon icon={icon} size={size} />;

  const title = link.title() || "";

  return (
    <Scrivito.LinkTag to={link} aria-label={title}>
      <Icon icon={icon} size={size} title={title} />
    </Scrivito.LinkTag>
  );
}
