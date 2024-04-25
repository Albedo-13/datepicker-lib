import { styled } from "styled-components";

import { variables as v } from "@/styles/_variables";
import { baseButton, rounded } from "@/styles/styles";

export const CalendarHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${v.spacing.s10};
`;

export const CalendarHeadButtonWrapper = styled.div`
  display: flex;
`;

export const CalendarHeadButton = styled.button`
  ${baseButton}
  ${rounded}
  user-select: none;

  &:hover {
    background-color: ${v.color.minorGray};
    transition: 0.2s all;
  }

  & > svg {
    width: ${v.spacing.s20};
    height: ${v.spacing.s20};
  }
`;

export const CalendarDate = styled.div`
  font-weight: ${v.fontWeight.fw700};
  font-size: ${v.fontSize.fs20};
`;
