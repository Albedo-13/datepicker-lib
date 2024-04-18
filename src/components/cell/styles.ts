import { styled } from "styled-components";

const Cell = styled.div`
  padding: 10px;
  width: 30px;
  height: 30px;
  /* background: #fff; */
  font-weight: 600;
  font-size: 13px;
  color: #333;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: red;
  }

  [data-outside='true'] {
    background-color: yellow;
  }
`;

export { Cell };
