import React, { useState, useMemo } from "react";
import styled from "styled-components";

import { CenteredFlexRow } from "../components/containers/Flex";
import Star from "../components/images/Star";

export enum HeaderMode {
  large = 0,
  small,
}

interface HeaderContext {
  mode: HeaderMode;
  setMode: (mode: HeaderMode) => void;
}

export const HeaderContext = React.createContext<HeaderContext>(
  {} as HeaderContext
);

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;

export const Header: React.FunctionComponent<{}> = (props) => {
  const [mode, setMode] = useState(HeaderMode.large);

  const value = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode]
  );

  return (
    <HeaderProvider value={value}>
      <HeaderWrapper mode={mode}>
        <Logo mode={mode} />
        <Title mode={mode}>things i like</Title>
      </HeaderWrapper>
      {props.children}
    </HeaderProvider>
  );
};

const HeaderWrapper = styled(CenteredFlexRow)<{ mode: HeaderMode }>`
  align-self: center;
  margin-top: ${({ theme }) => theme.space[5]};

  ${({ mode }) => {
    switch (mode) {
      case HeaderMode.large:
        return `
          flex-direction: column;
        `;
    }
  }}
`;

const Logo = styled(Star)<{ mode: HeaderMode }>`
  fill: #fff;
  transition: all 0.5s ease;

  ${({ mode }) => {
    switch (mode) {
      case HeaderMode.small:
        return `
        height: 6.25rem;
        width: 6.25rem;
      `;
      case HeaderMode.large:
        return `
          height: 18.75rem;
          width: 80vw;
          max-width: 600px;
        `;
    }
  }}
`;

const Title = styled.div<{ mode: HeaderMode }>`
  cursor: default;
  font-family: ${({ theme }) => theme.font.fancy};
  font-size: ${({ theme }) => theme.fontSizes[5]};
`;
