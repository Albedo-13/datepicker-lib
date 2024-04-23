import type { ChangeEvent } from "react";

export type InputType = {
  inputText: string,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleInputClear: () => void,
  handleCalendarVisibility: () => void,
  isValid: boolean,
}