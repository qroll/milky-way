import React from "react";
import styled from "styled-components";

import { CenteredFlexColumn } from "../components/containers/Flex";
import { Button } from "../components/buttons";
import { TextField } from "../components/form";

const Page = styled(CenteredFlexColumn)`
  width: 100%;
`;

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { username, password } = this.state;
    return (
      <Page>
        <TextField
          label="username"
          value={username}
          placeholder="username"
          onChange={this.onUsernameChange}
        />
        <TextField
          label="password"
          value={password}
          onChange={this.onPasswordChange}
          type="password"
        />
        <Button marginTop={5} onClick={this.onClick}>
          submit
        </Button>
      </Page>
    );
  }

  onUsernameChange = (username: string) => this.setState({ username });
  onPasswordChange = (password: string) => this.setState({ password });

  onClick = () => {
    // do something
  };
}

export default Login;
