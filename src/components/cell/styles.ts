import { styled } from "styled-components";

import { variables } from "@/styles/_variables";
import { rounded } from "@/styles/styles";

export const CellStyled = styled.div`
  ${rounded}
  padding: ${variables.spacing.s10};
  width: ${variables.spacing.s30};
  height: ${variables.spacing.s30};
  font-weight: ${variables.fontWeight.fw600};
  color: ${variables.color.textDark};
  font-size: ${variables.fontSize.fs18};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: 0.1s all;

  &:hover {
    color: ${variables.color.primary};
    background-color: ${variables.color.primaryA10};
    transition: 0.1s all;
  }

  &[data-between="true"] {
    color: ${variables.color.primary};
    background-color: ${variables.color.primaryA10};
    transition: 0.2s all;
  }

  &[data-outside="true"] {
    color: ${variables.color.textOutranged};
  }

  &[data-to="true"] {
    color: ${variables.color.white};
    background-color: ${variables.color.primaryA60};
    transition: 0.2s all;
  }

  &[data-from="true"] {
    color: ${variables.color.white};
    background-color: ${variables.color.primary};
    transition: 0.2s all;
  }

  &[data-weekend="true"],
  &[data-holiday="true"] {
    color: ${variables.color.red};
  }

  &[data-outside="true"][data-weekend="true"],
  &[data-outside="true"][data-holiday="true"] {
    color: ${variables.color.pink};
  }
`;
