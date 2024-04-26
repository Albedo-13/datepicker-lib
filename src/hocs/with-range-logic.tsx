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

export function withRangeLogic(
  Component: ComponentType<unknown>,
  fromRange: Date,
  setFromRange: Dispatch<SetStateAction<Date>>,
  toRange: Date,
  setToRange: Dispatch<SetStateAction<Date>>,
  maxValue?: string,
  minValue?: string
) {
  return function inputLogic() {
    const [inputFromText, setInputFromText] = useState(
      parseInputDate(fromRange as Date)
    );
    const [inputToText, setInputToText] = useState(
      parseInputDate(toRange as Date)
    );

    const [isValid, setIsValid] = useState(true);
    const [isCalendarVisible, setIsCalendarVisible] = useState(true);

    const handleInputChange = (
      e: ChangeEvent<HTMLInputElement>,
      setterInput: Dispatch<SetStateAction<string>>,
      setterRange: Dispatch<SetStateAction<Date>>
    ) => {
      const formattedValue = transformValue(
        formatValue(e.target.value),
        minValue,
        maxValue
      );
      handleDateChange(formattedValue, setterRange);
      validateDate(formattedValue);
      setterInput(formattedValue);
    };

    const handleDateChange = (
      value: string,
      setter: Dispatch<SetStateAction<Date>>
    ) => {
      if (INPUT_REGEX.test(value)) {
        setter(createDateFromString(value) as Date);
      }
    };

    // TODO: make universal handler
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
          inputText={inputFromText}
          // TODO: arrow funcs
          handleInputChange={(e) =>
            handleInputChange(e, setInputFromText, setFromRange)
          }
          handleInputClear={handleInputClear}
          handleCalendarVisibility={handleCalendarVisibility}
          isValid={isValid}
          labelText={"From:"}
        />
        <Input
          inputText={inputToText}
          handleInputChange={(e) =>
            handleInputChange(e, setInputToText, setToRange)
          }
          handleInputClear={handleInputClear}
          handleCalendarVisibility={handleCalendarVisibility}
          isValid={isValid}
          labelText={"To:"}
        />
        {isCalendarVisible && <Component />}
      </>
    );
  };
}
