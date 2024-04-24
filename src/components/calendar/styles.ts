import { styled } from "styled-components";

import { variables as v } from "@/styles/_variables";
import { rounded } from "@/styles/styles";

export const CalendarContainer = styled.div`
  ${rounded}
  width: calc(100% - 2px);
  border: 1px solid ${v.color.grayBorder};
  margin-top: ${v.spacing.s15};
`;
