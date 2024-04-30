import React, {
  type ChangeEvent,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

import { Input } from "@/components/input/input";
import { INPUT_REGEX } from "@/constants/constants";
import { formatValue, parseInputDate, transformValue } from "@/utils";
import { createDateFromString } from "@/utils";

export function withRangeLogic(
  Component: ComponentType<unknown>,
  fromRange: Date,
  setFromRange: Dispatch<SetStateAction<Date>>,
  toRange: Date,
  setToRange: Dispatch<SetStateAction<Date>>,
  maxValue?: string,
  minValue?: string
) {
  return function rangeLogic() {
    const [inputFromText, setInputFromText] = useState(
      parseInputDate(fromRange as Date)
    );
    const [inputToText, setInputToText] = useState(
      parseInputDate(toRange as Date)
    );

    const [isValid, setIsValid] = useState(true);
    const [isCalendarVisible, setIsCalendarVisible] = useState(true);

    const handleInputChange =
      (
        setterInput: Dispatch<SetStateAction<string>>,
        setterRange: Dispatch<SetStateAction<Date>>
      ) =>
      (e: ChangeEvent<HTMLInputElement>) => {
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

    const handleInputClear =
      (setterInput: Dispatch<SetStateAction<string>>) => () => {
        setterInput("");
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
          handleInputChange={handleInputChange(setInputFromText, setFromRange)}
          handleInputClear={handleInputClear(setInputFromText)}
          handleCalendarVisibility={handleCalendarVisibility}
          isValid={isValid}
          labelText={"From:"}
          dataTestid={"range-from-input"}
        />
        <Input
          inputText={inputToText}
          handleInputChange={handleInputChange(setInputToText, setToRange)}
          handleInputClear={handleInputClear(setInputToText)}
          handleCalendarVisibility={handleCalendarVisibility}
          isValid={isValid}
          labelText={"To:"}
          dataTestid={"range-to-input"}
        />
        {isCalendarVisible && <Component />}
      </>
    );
  };
}
