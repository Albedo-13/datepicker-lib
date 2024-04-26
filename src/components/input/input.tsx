import React from "react";

import { ClearSvg } from "@/assets/clear-cross";
import { DiarySvg } from "@/assets/diary";
import type { InputType } from "@/types/input";

import {
  InputButtonLeft,
  InputButtonRight,
  InputStyled,
  InputWrapper,
} from "./styles";

export function Input({
  inputText,
  handleInputChange,
  handleInputClear,
  handleCalendarVisibility,
  isValid,
  labelText,
}: InputType) {
  return (
    <>
      <p>{labelText}</p>
      <InputWrapper data-valid={isValid}>
        <InputButtonLeft onClick={handleCalendarVisibility}>
          <DiarySvg />
        </InputButtonLeft>
        <InputStyled
          onChange={handleInputChange}
          value={inputText}
          type="text"
          placeholder="Choose Date"
        />
        <InputButtonRight onClick={handleInputClear}>
          <ClearSvg />
        </InputButtonRight>
      </InputWrapper>
    </>
  );
}
