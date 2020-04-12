import React, { useCallback, useState, useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { CenteredFlexColumn } from "../components/containers/Flex";
import { Button } from "../components/buttons";
import { TextField } from "../components/form";
import { AuthService } from "../services/AuthService";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

const Page = styled(CenteredFlexColumn)`
  width: 100%;
`;

const Item = styled(CenteredFlexColumn).attrs({ as: "form" })`
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

const PageButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space[3]};
`;

const PageItem: React.FunctionComponent<{ visible: boolean }> = (props) => {
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

const LoginAsExistingUser: React.FunctionComponent<{
  onNewUser: () => void;
  visible: boolean;
}> = (props) => {
  const { onNewUser, visible } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useContext(UserContext);

  const history = useHistory();

  const onUsernameChange = useCallback(
    (username: string) => setUsername(username),
    []
  );
  const onPasswordChange = useCallback(
    (password: string) => setPassword(password),
    []
  );

  const onSubmit = useCallback(() => {
    AuthService.login(username, password)
      .then((user) => {
        userContext.setUser(user);
        history.push("/main");
      })
      .catch(() => {});
  }, [username, password, history, userContext]);

  return (
    <PageItem visible={visible}>
      <TextField
        label="username"
        value={username}
        placeholder="username"
        autoComplete="username"
        onChange={onUsernameChange}
      />
      <TextField
        label="password"
        value={password}
        placeholder="password"
        autoComplete="current-password"
        onChange={onPasswordChange}
        type="password"
      />
      <PageButton onClick={onSubmit}>submit</PageButton>
      <PageButton onClick={onNewUser}>new user?</PageButton>
    </PageItem>
  );
};

const LoginAsNewUser: React.FunctionComponent<{
  onExistingUser: () => void;
  visible: boolean;
}> = (props) => {
  const { onExistingUser, visible } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onUsernameChange = useCallback(
    (username: string) => setUsername(username),
    []
  );
  const onPasswordChange = useCallback(
    (password: string) => setPassword(password),
    []
  );
  const onConfirmPasswordChange = useCallback(
    (password: string) => setConfirmPassword(password),
    []
  );

  const onSubmit = useCallback(() => {
    // do something
  }, []);

  return (
    <PageItem visible={visible}>
      <TextField
        label="username"
        value={username}
        placeholder="username"
        autoComplete="username"
        onChange={onUsernameChange}
      />
      <TextField
        label="password"
        value={password}
        placeholder="password"
        autoComplete="new-password"
        onChange={onPasswordChange}
        type="password"
      />
      <TextField
        label="password2"
        value={confirmPassword}
        placeholder="confirm password"
        autoComplete="off"
        onChange={onConfirmPasswordChange}
        type="password"
        disabled={!password}
      />
      <PageButton onClick={onSubmit}>sign up</PageButton>
      <PageButton onClick={onExistingUser}>existing user?</PageButton>
    </PageItem>
  );
};

class Login extends React.Component {
  state = {
    current: 0,
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
