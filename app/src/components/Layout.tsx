import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FlexColumn } from "./containers/Flex";

const Container = styled(FlexColumn)`
  color: white;
  min-height: 100vh;

  *::selection {
    background: rgba(255, 255, 255, 0.99);
    color: #000;
  }
`;

const theme = {
  font: {
    fancy: "Reenie Beanie"
  }
};

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </Container>
    );
  }
}

export default Layout;
