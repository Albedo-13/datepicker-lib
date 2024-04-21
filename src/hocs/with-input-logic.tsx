import React, { useState } from "react";

import { Input } from "@/components/input/input";

// TODO: валидация после полного ввода
// количество дней определяется через getDaysFromMonth
// месяц определяется как минимальное между введенным и 12 (константа)
// год - базовый диапазон между 1970 (1 янв) и 2037

export function withInputLogic(Component) {
  return function inputLogic(props) {
    const [inputText, setInputText] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isCalendarVisible, setIsCalendarVisible] = useState(true);

    const handleInputChange = (e) => {
      
      const formattedValue = formatValue(e.target.value);
      
      setInputText(() => formattedValue);
      validateDate(formattedValue);
    };

    const handleInputClear = () => {
      setInputText("");
      validateDate(true);
    };
    
    const handleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev);
    };

    const validateDate = (value) => {
      const regex = /^\d{2}\/\d{2}\/\d{4}$/;
      setIsValid(regex.test(value));
    };

    const formatValue = (value) => {
      const onlyDigits = value.replace(/\D/g, '');
      let formattedValue = onlyDigits.slice(0, 2);
      if (onlyDigits.length > 2) {
        formattedValue += "/" + onlyDigits.slice(2, 4);
      }
      if (onlyDigits.length > 4) {
        formattedValue += "/" + onlyDigits.slice(4, 8);
      }
      return formattedValue;
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
        {isCalendarVisible && <Component {...props} />}
      </>
    );
  };
}
