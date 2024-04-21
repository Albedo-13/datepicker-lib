import React from "react";

import { ClearSvg } from "@/assets/clear";
import { DiarySvg } from "@/assets/diary";

import * as S from "./styles";

export function Input({ handleInputChange }) {
  return (
    <S.InputWrapper>
      <S.InputButtonLeft>
        <DiarySvg />
      </S.InputButtonLeft>
      <S.Input
        onChange={handleInputChange}
        type="text"
        placeholder="Choose Date"
      />
      <S.InputButtonRight>
        <ClearSvg />
      </S.InputButtonRight>
    </S.InputWrapper>
  );
}
