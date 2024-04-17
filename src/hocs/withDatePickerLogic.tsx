import React, { useState } from "react";

export function withDatePickerLogic(Component) {
  const handleFunnyClick = () => {
    console.log(`
      — Мам, смотри, снегирь! У тебя хлеб есть?\n
      — Без хлеба ешь!
    `);
  };

  return () => {
    const [digit, setDigit] = useState(0);

    return (
      <>
        <Component
          handleFunnyClick={handleFunnyClick}
          digit={digit}
          setDigit={setDigit}
        />
      </>
    );
  };
}
