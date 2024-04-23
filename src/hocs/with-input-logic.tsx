import React, { useState } from "react";

import { Input } from "@/components/input/input";
import { INPUT_REGEX } from "@/constants/constants";
import { createDateWithTimezoneOffsetFromString } from "@/utils/dateUtils";
import {
  formatValue,
  parseInputDate,
  transformValue,
} from "@/utils/inputUtils";

export function withInputLogic(Component, date, setDate) {
  return function inputLogic() {
    const [inputText, setInputText] = useState(parseInputDate(date));
    const [isValid, setIsValid] = useState(true);
    const [isCalendarVisible, setIsCalendarVisible] = useState(true);

    const handleInputChange = (e) => {
      const formattedValue = transformValue(formatValue(e.target.value));
      handleDateChange(formattedValue);
      validateDate(formattedValue);
      setInputText(formattedValue);
    };

    const handleDateChange = (date) => {
      if (INPUT_REGEX.test(date)) {
        setDate(createDateWithTimezoneOffsetFromString(date));
      }
    };

    const handleInputClear = () => {
      setInputText("");
      validateDate(true);
    };

    const handleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev);
    };

    const validateDate = (value) => {
      setIsValid(INPUT_REGEX.test(value));
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
