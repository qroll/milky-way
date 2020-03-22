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
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray: ["#EEEEEE", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]
  },
  font: {
    fancy: "Reenie Beanie"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  space: [0, 2, 4, 8, 16, 32]
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
