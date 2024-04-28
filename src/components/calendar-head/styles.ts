import { styled } from "styled-components";

import { variables } from "@/styles/_variables";
import { baseButton, rounded } from "@/styles/styles";

export const CalendarHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${variables.spacing.s10};
`;

export const CalendarHeadButtonWrapper = styled.div`
  display: flex;
`;

export const CalendarHeadButton = styled.button`
  ${baseButton}
  ${rounded}
  user-select: none;

  &:hover {
    background-color: ${variables.color.minorGray};
    transition: 0.2s all;
  }

  & > svg {
    width: ${variables.spacing.s20};
    height: ${variables.spacing.s20};
  }
`;

export const CalendarDate = styled.div`
  font-weight: ${variables.fontWeight.fw700};
  font-size: ${variables.fontSize.fs20};
  cursor: pointer;
  user-select: none;
`;
