import { styled } from "styled-components";

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
  border: none;
  background-color: transparent;
  background-color: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: 0.2s all;
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
