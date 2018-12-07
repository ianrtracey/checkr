import React from "react";
import { Pane, majorScale, Tooltip, Heading, IconButton } from "evergreen-ui";
import { LinkTable } from "./LinkTable";
import { Link } from "react-router-dom";
const profiles = [
  {
    id: "1",
    name: "/writing",
    latency: "50ms",
    status: "200"
  },
  {
    id: "1",
    name: "/thoughts",
    latency: "534ms",
    status: "200"
  },
  {
    id: "1",
    name: "/talks",
    latency: "5ms",
    status: "404"
  }
];

export const SitePage = () => (
  <Pane>
    <Pane background="tint2">
      <Pane paddingX={majorScale(12)} paddingY={majorScale(3)}>
        <Pane display="flex">
          <Link to="/">
            <Tooltip content="Back to Sites">
              <IconButton
                height={42}
                icon="arrow-left"
                intent="muted"
                marginRight={majorScale(2)}
              />
            </Tooltip>
          </Link>
          <Heading size={900}>ianrtracey.com</Heading>
        </Pane>
      </Pane>
    </Pane>
    <Pane marginTop={majorScale(3)} paddingX={majorScale(12)}>
      <LinkTable profiles={profiles} />
    </Pane>
  </Pane>
);
