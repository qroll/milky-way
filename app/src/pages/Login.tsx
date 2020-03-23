import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { CenteredFlexColumn } from "../components/containers/Flex";
import { Button } from "../components/buttons";
import { TextField } from "../components/form";

const Page = styled(CenteredFlexColumn)`
  width: 100%;
`;

const Item = styled(CenteredFlexColumn)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 1s ease;
  opacity: 0;
  display: none;

  &.fade-enter,
  &.fade-appear {
    display: flex;
  }

  &.fade-enter-active,
  &.fade-appear-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 0;
  }

  &.fade-exit-done {
    display: none;
  }
`;

const PageItem: React.FunctionComponent<{ visible: boolean }> = props => {
  return (
    <CSSTransition
      appear
      in={props.visible}
      classNames="fade"
      addEndListener={() => {}}
    >
      <Item>{props.children}</Item>
    </CSSTransition>
  );
};

class LoginAsExistingUser extends React.Component<{
  onNewUser: () => void;
  visible: boolean;
}> {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { username, password } = this.state;
    const { onNewUser, visible } = this.props;
    return (
      <PageItem visible={visible}>
        <TextField
          label="username"
          value={username}
          placeholder="username"
          onChange={this.onUsernameChange}
        />
        <TextField
          label="password"
          value={password}
          placeholder="password"
          onChange={this.onPasswordChange}
          type="password"
        />
        <Button marginTop={5} onClick={this.onClick}>
          submit
        </Button>
        <Button marginTop={5} onClick={onNewUser}>
          new user?
        </Button>
      </PageItem>
    );
  }

  onUsernameChange = (username: string) => this.setState({ username });
  onPasswordChange = (password: string) => this.setState({ password });

  onClick = () => {
    // do something
  };
}

class LoginAsNewUser extends React.Component<{
  onExistingUser: () => void;
  visible: boolean;
}> {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    const { onExistingUser, visible } = this.props;
    return (
      <PageItem visible={visible}>
        <TextField
          label="username"
          value={username}
          placeholder="username"
          onChange={this.onUsernameChange}
        />
        <TextField
          label="password"
          value={password}
          placeholder="password"
          onChange={this.onPasswordChange}
          type="password"
        />
        <TextField
          label="password2"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={this.onConfirmPasswordChange}
          type="password"
          disabled={!password}
        />
        <Button marginTop={5} onClick={this.onClick}>
          sign up
        </Button>
        <Button marginTop={5} onClick={onExistingUser}>
          existing user?
        </Button>
      </PageItem>
    );
  }

  onUsernameChange = (username: string) => this.setState({ username });
  onPasswordChange = (password: string) => this.setState({ password });
  onConfirmPasswordChange = (confirmPassword: string) =>
    this.setState({ confirmPassword });

  onClick = () => {
    // do something
  };
}

class Login extends React.Component {
  state = {
    current: 0
  };

  render() {
    const { current } = this.state;

    return (
      <Page>
        <LoginAsExistingUser
          onNewUser={this.onNewUser}
          visible={current === 0}
        />
        <LoginAsNewUser
          onExistingUser={this.onExistingUser}
          visible={current === 1}
        />
      </Page>
    );
  }

  onNewUser = () => this.setState({ current: 1 });
  onExistingUser = () => this.setState({ current: 0 });
}

export default Login;
