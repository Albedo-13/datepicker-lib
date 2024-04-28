import { styled } from "styled-components";

import { variables } from "@/styles/_variables";
import { rounded } from "@/styles/styles";

export const CalendarContainer = styled.div`
  ${rounded}
  width: calc(100% - 2px);
  border: 1px solid ${variables.color.grayBorder};
  margin-top: ${variables.spacing.s15};
`;
