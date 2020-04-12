import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FlexColumn } from "../components/containers/Flex";
import { theme } from "../components/theme";
import { Header } from "./Header";

const Container = styled(FlexColumn)`
  color: white;
  min-height: 100vh;
`;

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Header>{this.props.children}</Header>
        </ThemeProvider>
      </Container>
    );
  }
}

export default Layout;
