import React, { useState } from "react";

import { Input } from "@/components/input/input";
import { WEEKDAYS } from "@/constants/constants";
import { WeekdaysItemType } from "@/types/types";

export function withInputLogic(Component) {
  return function inputLogic(props) {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
      console.log(e.target.value);
      setInputText(() => e.target.value);
    };

    return (
      <>
        <Input handleInputChange={handleInputChange} />
        <Component {...props} />
      </>
    );
  };
}
