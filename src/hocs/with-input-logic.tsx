import React, {
  type ChangeEvent,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

import { Input } from "@/components/input/input";
import { INPUT_REGEX } from "@/constants/constants";
import { createDateFromString } from "@/utils/dateUtils";
import {
  formatValue,
  parseInputDate,
  transformValue,
} from "@/utils/inputUtils";

export function withInputLogic(
  Component: ComponentType<unknown>,
  date: Date,
  setDate: Dispatch<SetStateAction<Date>>,
  maxValue?: string,
  minValue?: string
) {
  return function inputLogic() {
    const [inputText, setInputText] = useState(parseInputDate(date));
    const [isValid, setIsValid] = useState(true);
    const [isCalendarVisible, setIsCalendarVisible] = useState(true);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const formattedValue = transformValue(
        formatValue(e.target.value),
        minValue,
        maxValue
      );
      handleDateChange(formattedValue);
      validateDate(formattedValue);
      setInputText(formattedValue);
    };

    const handleDateChange = (value: string) => {
      if (INPUT_REGEX.test(value)) {
        setDate(createDateFromString(value) as Date);
      }
    };

    const handleInputClear = () => {
      setInputText("");
      validateDate(true);
    };

    const handleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev);
    };

    const validateDate = (value: string | boolean) => {
      typeof value === "boolean"
        ? setIsValid(value)
        : setIsValid(INPUT_REGEX.test(value));
    };

    return (
      <>
        <Input
          inputText={inputText}
          handleInputChange={handleInputChange}
          handleInputClear={handleInputClear}
          handleCalendarVisibility={handleCalendarVisibility}
          isValid={isValid}
        />
        {isCalendarVisible && <Component />}
      </>
    );
  };
}
