import React from "react";
import { majorScale, Pane, Heading, Button } from "evergreen-ui";
import { Link } from "react-router-dom";

export const Header = () => (
  <Pane
    display="flex"
    padding={majorScale(2)}
    background="tint1"
    borderRadius={3}
    borderBottom="default"
  >
    <Pane alignItems="center" display="flex">
      <Heading marginRight={majorScale(3)} size={600}>
        Warden
      </Heading>
    </Pane>
    <Pane>
      <Link to="/something">
        <span marginRight={16}>Button</span>
      </Link>
      <Button appearance="minimal">Primary Button</Button>
    </Pane>
  </Pane>
);
