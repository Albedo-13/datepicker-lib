import { styled } from "styled-components";

import { variables as v } from "@/styles/_variables";
import { rounded } from "@/styles/styles";

export const CellStyled = styled.div`
  ${rounded}
  padding: ${v.spacing.s10};
  width: ${v.spacing.s30};
  height: ${v.spacing.s30};
  font-weight: ${v.fontWeight.fw600};
  color: ${v.color.textDark};
  font-size: ${v.fontSize.fs18};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: 0.1s all;

  &:hover {
    color: ${v.color.primary};
    background-color: ${v.color.primaryA10};
    transition: 0.1s all;
  }
  
  &[data-between="true"] {
    color: ${v.color.primary};
    background-color: ${v.color.primaryA10};
    transition: 0.2s all;
  }

  &[data-outside="true"] {
    color: ${v.color.textOutranged};
  }


  &[data-to="true"] {
    color: ${v.color.white};
    background-color: ${v.color.primaryA60};
    transition: 0.2s all;
  }

  &[data-from="true"] {
    color: ${v.color.white};
    background-color: ${v.color.primary};
    transition: 0.2s all;
  }

  &[data-weekend="true"] {
    color: ${v.color.red};
  }

  &[data-outside="true"][data-weekend="true"] {
    color: ${v.color.pink};
  }
`;
