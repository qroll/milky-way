import styled from "styled-components";
import { flexbox, layout, space } from "styled-system";

export const FlexColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${flexbox}
  ${layout}
  ${space}
`;

export const CenteredFlexColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${flexbox}
  ${layout}
  ${space}
`;

export const FlexRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ${flexbox}
  ${layout}
  ${space}
`;

export const CenteredFlexRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${flexbox}
  ${layout}
  ${space}
`;
