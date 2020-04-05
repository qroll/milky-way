import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FlexColumn } from "../components/containers/Flex";
import { theme } from "../components/theme";

const Container = styled(FlexColumn)`
  color: white;
  min-height: 100vh;
`;

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
