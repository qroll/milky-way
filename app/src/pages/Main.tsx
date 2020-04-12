import React from "react";
import styled from "styled-components";

import Star from "../components/images/Star";
import { CenteredFlexColumn } from "../components/containers/Flex";
import { Button } from "../components/buttons";

const Page = styled(CenteredFlexColumn)`
  width: 100%;
`;

const Header = styled(Star)`
  fill: #fff;
  height: 300px;
  width: 80vw;
  max-width: 600px;
  margin-top: 100px;
`;

const Title = styled.div`
  cursor: default;
  font-family: ${({ theme }) => theme.font.fancy};
  font-size: ${({ theme }) => theme.fontSizes[5]};
`;

const LoginButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space[3]};
`;

class Main extends React.Component {
  render() {
    return (
      <Page>
        <Header />
        <Title>things i like</Title>
        <LoginButton to="/login">log in</LoginButton>
      </Page>
    );
  }
}

export default Main;
