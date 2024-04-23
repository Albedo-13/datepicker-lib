import React from "react";

import { ClearSvg } from "@/assets/clear";
import { DiarySvg } from "@/assets/diary";
import type { InputType } from "@/types/input";

import * as S from "./styles";

export function Input({
  inputText,
  handleInputChange,
  handleInputClear,
  handleCalendarVisibility,
  isValid,
}: InputType) {
  return (
    <S.InputWrapper data-valid={isValid}>
      <S.InputButtonLeft onClick={handleCalendarVisibility}>
        <DiarySvg />
      </S.InputButtonLeft>
      <S.Input
        onChange={handleInputChange}
        value={inputText}
        type="text"
        placeholder="Choose Date"
      />
      <S.InputButtonRight onClick={handleInputClear}>
        <ClearSvg />
      </S.InputButtonRight>
    </S.InputWrapper>
  );
}
