import { styled } from "styled-components";

import { variables } from "@/styles/_variables";
import { baseButton, rounded } from "@/styles/styles";

export const InputWrapper = styled.div`
  ${rounded}
  position: relative;
  user-select: none;
  border: 1px solid ${variables.color.grayBorder};

  &[data-valid="false"] {
    border: 1px solid ${variables.color.red};
  }
`;

export const InputButtonLeft = styled.button`
  ${baseButton}
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const InputButtonRight = styled.button`
  ${baseButton}
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const InputStyled = styled.input`
  ${rounded}
  padding: ${variables.spacing.s10} ${variables.spacing.s40};
  width: calc(100% - (${variables.spacing.s80} + 2px));
  font-size: ${variables.fontSize.fs18};
  border: none;
  outline: none;
`;

export const InputLabel = styled.p`
  font-size: ${variables.fontSize.fs18};
  margin: 0;
  margin-top: ${variables.spacing.s10};
`;
