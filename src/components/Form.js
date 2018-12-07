import React, { Component } from "react";
import { Button, Pane, majorScale, TextInput } from "evergreen-ui";

export class Form extends Component {
  state = {
    domain: ""
  };

  handleChange = e => {
    this.setState({
      domain: e.target.value
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    console.log("submit!");
    onSubmit(this.state);
    this.setState({
      domain: ""
    });
  };

  render() {
    return (
      <Pane paddingTop={majorScale(3)} display="flex">
        <form onSubmit={this.handleSubmit}>
          <TextInput
            height={35}
            name="text-input-name"
            placeholder="http://yoursitehere.com"
            value={this.state.domain}
            onChange={this.handleChange}
          />
          <Button
            height={35}
            appearance="primary"
            intent="success"
            iconBefore="add"
          >
            Add Site
          </Button>
        </form>
      </Pane>
    );
  }
}
