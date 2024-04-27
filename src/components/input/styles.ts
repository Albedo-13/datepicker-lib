import { styled } from "styled-components";

import { variables as v } from "@/styles/_variables";
import { baseButton, rounded } from "@/styles/styles";

export const InputWrapper = styled.div`
  ${rounded}
  position: relative;
  user-select: none;
  border: 1px solid ${v.color.grayBorder};

  &[data-valid="false"] {
    border: 1px solid ${v.color.red};
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
  padding: ${v.spacing.s10} ${v.spacing.s40};
  width: calc(100% - (${v.spacing.s80} + 2px));
  font-size: ${v.fontSize.fs18};
  border: none;
  outline: none;
`;

export const InputLabel = styled.p`
  font-size: ${v.fontSize.fs18};
  margin: 0;
  margin-top: ${v.spacing.s10};
`;
