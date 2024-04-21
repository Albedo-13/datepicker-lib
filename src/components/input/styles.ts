import { styled } from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

const InputButtonLeft = styled.div`
  border: none;
  background-color: transparent;
  background-color: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

const InputButtonRight = styled.div`
  border: none;
  background-color: transparent;
  background-color: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Input = styled.input`
  padding: 10px 40px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  width: calc(100% - (80px + 2px));
  font-size: 18px;

  &::placeholder {
    color: #bbb;
  }
`;

export { Input, InputButtonLeft, InputButtonRight, InputWrapper };
