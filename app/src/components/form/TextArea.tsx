import React, { useCallback } from "react";
import styled from "styled-components";

import { Modify } from "../../utils/utilityTypes";

const StyledInput = styled.textarea`
  background-color: #fff;
  color: #000;
  padding: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[3]};
  resize: none;
  transition: all 0.3s ease;

  &::selection {
    background: #ef4d9b;
    color: #000;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[1]};
    font-style: italic;
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.gray[2]};
  }
`;

export interface TextAreaProps
  extends Modify<
    React.HTMLProps<HTMLInputElement>,
    {
      as?: undefined; // disable 'as'
      ref?: React.Ref<HTMLInputElement>; // fix legacy string ref issue
      label?: string;
      value: string;
      onChange?: (value: string) => void;
    }
  > {}

export const TextArea: React.FunctionComponent<TextAreaProps> = (props) => {
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
