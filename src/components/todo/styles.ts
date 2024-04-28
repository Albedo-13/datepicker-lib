import styled from "styled-components";

import { variables } from "@/styles/_variables";
import { baseButton, primaryButton, rounded } from "@/styles/styles";

export const TodoWrapper = styled.div`
  margin-top: ${variables.spacing.s15};
`;
export const TodoInputWrapper = styled.div`
  position: relative;
`;

export const TodoAddButton = styled.button`
  ${primaryButton}
  ${rounded}
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: ${variables.color.primaryA60};
    transition: 0.2s all;
  }
`;

export const TodoInput = styled.input`
  ${rounded}
  padding: ${variables.spacing.s10} ${variables.spacing.s20};
  width: calc(100% - (${variables.spacing.s40} + 2px));
  font-size: ${variables.fontSize.fs18};
  border: 1px solid ${variables.color.grayBorder};
  outline: none;
`;

export const TodoItem = styled.div`
  ${rounded}
  margin: ${variables.spacing.s5} 0;
  padding-left: ${variables.spacing.s20};
  font-size: ${variables.fontSize.fs18};
  border: 1px solid ${variables.color.grayBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoItemRemoveButton = styled.button`
  ${baseButton}
  ${rounded}
  background-color: ${variables.color.minorGray};
  color: ${variables.color.textDark};
  font-size: ${variables.fontSize.fs18};
  font-weight: ${variables.fontWeight.fw700};
`;
