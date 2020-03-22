import styled from "styled-components";
import { flexbox } from "styled-system";

export const FlexColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${flexbox}
`;

export const CenteredFlexColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${flexbox}
`;

export const FlexRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ${flexbox}
`;

export const CenteredFlexRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${flexbox}
`;
