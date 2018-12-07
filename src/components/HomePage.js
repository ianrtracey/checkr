import React, { Component } from "react";
import { Card, majorScale, Pane, Heading, Button } from "evergreen-ui";
import { Form } from "./Form";
import { SiteList } from "./SiteList";

const sampleSites = [
  {
    domain: "ianrtracey.com",
    status: "DONE"
  },
  {
    domain: "hackarizona.org",
    status: "ERROR"
  }
];

export class HomePage extends Component {
  state = {
    sites: sampleSites
  };

  handleAddSite = ({ domain }) => {
    this.setState({
      sites: [
        ...this.state.sites,
        {
          domain,
          status: "IN PROGRESS"
        }
      ]
    });
  };

  render() {
    return (
      <Pane marginTop={majorScale(10)} display="flex" justifyContent="center">
        <Card
          display="flex"
          justifyContent="center"
          width={700}
          elevation={4}
          padding={majorScale(4)}
        >
          <Pane>
            <Heading size={900}>Sites</Heading>
            <Form onSubmit={this.handleAddSite} />
            <SiteList sites={this.state.sites} />
          </Pane>
        </Card>
      </Pane>
    );
  }
}
