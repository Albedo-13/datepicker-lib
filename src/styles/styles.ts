import { css } from "styled-components";

import { variables as v } from "@/styles/_variables";

export const baseButton = css`
  border: none;
  background-color: transparent;
  background-color: none;
  cursor: pointer;
  padding: ${v.spacing.s10};
  display: flex;
  align-items: center;
  transition: 0.2s all;
`;


export const rounded = css`
  border-radius: 8px;
`;