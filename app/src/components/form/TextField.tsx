import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { color, layout, space } from "styled-system";
import { StyledSystemProps } from "../types";
import { Modify } from "../../utils/utilityTypes";

const StyledInput = styled.input`
  background-color: #fff;
  color: #000;
  padding: 0.5rem;
  margin-top: ${({ theme }) => theme.space[3]}px;

  &::selection {
    background: #ef4d9b;
    color: #000;
  }
`;

export interface TextFieldProps
  extends Modify<
    React.HTMLProps<HTMLInputElement>,
    {
      as?: undefined; // disable 'as'
      ref?: React.Ref<HTMLInputElement>; // fix legacy string ref issue
      label: string;
      value: string;
      onChange?: (value: string) => void;
    }
  > {}

export const TextField: React.FunctionComponent<TextFieldProps> = props => {
  const { onChange, ...passthroughProps } = props;

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange?.(value);
    },
    [onChange]
  );

  return <StyledInput onChange={handleOnChange} {...passthroughProps} />;
};
