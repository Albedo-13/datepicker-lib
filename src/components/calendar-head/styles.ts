import { styled } from "styled-components";

import { baseButton } from "@/styles/styles";

const CalendarHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const CalendarHeadButtonWrapper = styled.div`
  display: flex;
`;

const CalendarHeadButton = styled.button`
  ${baseButton}
  border-radius: 8px;
  user-select: none;

  &:hover {
    background-color: #00000010;
    transition: 0.2s all;
  }

  & > svg {
    width: 21px;
    height: 21px;
  }
`;

const CalendarDate = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export {
  CalendarDate,
  CalendarHead,
  CalendarHeadButton,
  CalendarHeadButtonWrapper,
};
