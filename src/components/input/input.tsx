import React from "react";

import { ClearSvg } from "@/assets/clear-cross";
import { DiarySvg } from "@/assets/diary";
import type { InputType } from "@/types/input";

import {
  InputButtonLeft,
  InputButtonRight,
  InputLabel,
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
  dataTestid,
}: InputType) {
  return (
    <>
      {labelText && <InputLabel>{labelText}</InputLabel>}
      <InputWrapper data-valid={isValid}>
        <InputButtonLeft onClick={handleCalendarVisibility}>
          <DiarySvg />
        </InputButtonLeft>
        <InputStyled
          onChange={handleInputChange}
          value={inputText}
          type="text"
          placeholder="Choose Date"
          data-testid={dataTestid}
        />
        <InputButtonRight onClick={handleInputClear}>
          <ClearSvg />
        </InputButtonRight>
      </InputWrapper>
    </>
  );
}
