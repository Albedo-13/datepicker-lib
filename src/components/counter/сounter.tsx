import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: pink;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Currently, the count is {count}</p>
      <StyledButton onClick={() => setCount(count - 1)}>Subtract</StyledButton>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};
