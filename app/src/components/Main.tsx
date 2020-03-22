import React from "react";
import styled from "styled-components";

import Star from "./images/Star";
import { CenteredFlexColumn } from "./containers/Flex";
import { Button } from "./buttons";

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
  font-size: 2rem;
`;

class Main extends React.Component {
  render() {
    return (
      <Page>
        <Header />
        <Title>things i like</Title>
        <Button marginTop={5}>log in</Button>
      </Page>
    );
  }
}

export default Main;
