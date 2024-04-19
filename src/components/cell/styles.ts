import { styled } from "styled-components";

const Cell = styled.div`
  padding: 10px;
  width: 30px;
  height: 30px;
  font-weight: 600;
  font-size: 13px;
  color: #333;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  // TODO: unselectable text

  &:hover {
    background-color: red;
  }

  &[data-outside="true"] {
    color: #AAAAAA;
  }

  &[data-picked="true"] {
    color: white;
    background-color: #2f80ed;
  }
`;

export { Cell };
