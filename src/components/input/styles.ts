import { styled } from "styled-components";

import { baseButton } from "@/styles/styles";

const InputWrapper = styled.div`
  position: relative;
  user-select: none;
  border-radius: 8px;
  border: 1px solid #e1e1e1;

  &[data-valid="false"] {
    border: 1px solid red;
  }
`;

const InputButtonLeft = styled.button`
  ${baseButton}
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

const InputButtonRight = styled.button`
  ${baseButton}
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Input = styled.input`
  padding: 10px 40px;
  width: calc(100% - (80px + 2px));
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 8px;

  &::placeholder {
    color: #bbb;
  }
`;

export { Input, InputButtonLeft, InputButtonRight, InputWrapper };
