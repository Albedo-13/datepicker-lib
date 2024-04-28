import type { ChangeEvent } from "react";

export type InputType = {
  inputText: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputClear: VoidFunction;
  handleCalendarVisibility: VoidFunction;
  isValid: boolean;
  labelText?: string;
};
