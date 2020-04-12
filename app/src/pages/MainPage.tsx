import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { CenteredFlexColumn } from "../components/containers/Flex";
import { Button } from "../components/buttons";
import { HeaderContext, HeaderMode } from "./Header";

const Page = styled(CenteredFlexColumn)`
  width: 100%;
`;

const LoginButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space[3]};
`;

const MainPage: React.FunctionComponent<{}> = (props) => {
  const { setMode } = useContext(HeaderContext);

  useEffect(() => setMode(HeaderMode.large), [setMode]);

  return (
    <Page>
      <LoginButton to="/login">log in</LoginButton>
    </Page>
  );
};

export default MainPage;
