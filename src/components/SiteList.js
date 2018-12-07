import React from "react";
import { Pane, Badge, majorScale, Text, Spinner } from "evergreen-ui";
import { Link } from "react-router-dom";

const statusToColor = status => {
  const colorMap = {
    DONE: "green",
    ERROR: "red",
    "IN PROGRESS": "yellow"
  };
  return colorMap[status];
};
const StatusBadge = ({ status }) => (
  <Badge color={statusToColor(status)} marginRight={8}>
    {status}
  </Badge>
);

export const SiteList = ({ sites }) => (
  <Pane color="muted" marginTop={majorScale(3)}>
    {sites.map(site => (
      <Pane display="flex" alignItems="center">
        {site.status === "IN PROGRESS" ? (
          <Spinner size={16} marginRight={8} />
        ) : null}
        <Link to="/site">
          <Text size={600} marginRight={4}>
            {site.domain}
          </Text>
        </Link>
        <StatusBadge status={site.status} />
      </Pane>
    ))}
  </Pane>
);
