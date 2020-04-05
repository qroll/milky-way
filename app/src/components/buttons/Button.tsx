import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { color, layout, space } from "styled-system";
import { Link } from "react-router-dom";

import { StyledSystemProps } from "../types";

const buttonStyle = css`
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  outline: none;
  transition: all 0.3s ease, color 0.1s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    transform: scale(1.1, 1.1);
  }
  
  ${color}
  ${layout}
  ${space}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledAnchor = styled.a`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: (e?: React.MouseEvent) => void;
  passOnClickEvent?: boolean;
}

export const Button: React.FunctionComponent<StyledSystemProps &
  ButtonProps> = props => {
  const {
    children,
    href,
    to,
    onClick,
    passOnClickEvent,
    ...passthroughProps
  } = props;

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      if (passOnClickEvent) {
        return onClick?.(e);
      }
      e.preventDefault();
      onClick?.();
    },
    [onClick, passOnClickEvent]
  );

  if (href) {
    return (
      <StyledAnchor href={href} onClick={handleOnClick} {...passthroughProps}>
        {children}
      </StyledAnchor>
    );
  }
  if (to) {
    return (
      <StyledLink to={to} {...passthroughProps}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledButton onClick={handleOnClick} {...passthroughProps}>
      {children}
    </StyledButton>
  );
};
