import React, { useState } from "react";

import { Input } from "@/components/input/input";
import { INPUT_REGEX } from "@/constants/constants";
import { formatValue, transformValue } from "@/utils/inputUtils";

export function withInputLogic(Component) {
  return function inputLogic(props) {
    // console.log(props);
    const [inputText, setInputText] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isCalendarVisible, setIsCalendarVisible] = useState(true);

    const handleInputChange = (e) => {
      const formattedValue = transformValue(formatValue(e.target.value));
      validateDate(formattedValue);
      setInputText(formattedValue);
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
