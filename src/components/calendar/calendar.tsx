import React from "react";

import { Container } from "@/styles/style";

import { Cell } from "../cell/cell";

import * as S from "./styles";

export function Calendar() {
  return (
    <Container>
      <S.Calendar>
        {[
          0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 1, 2,
          3, 0, 0, 0, 0, 0, 0,
        ].map((item, id) => (
          <Cell key={id} day={item} />
        ))}
      </S.Calendar>
    </Container>
  );
}
