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
  user-select: none;
  transition: 0.1s all;

  &:hover {
    color: #2f80ed;
    background-color: #2f80ed1a;
    transition: 0.1s all;
  }

  &[data-outside="true"] {
    color: #aaaaaa;
  }

  &[data-between="true"] {
    color: #2f80ed;
    background-color: #2f80ed1a;
    transition: 0.2s all;
  }

  &[data-to="true"] {
    color: white;
    background-color: #2f80ed99;
    transition: 0.2s all;
  }

  &[data-from="true"] {
    color: white;
    background-color: #2f80ed;
    transition: 0.2s all;
  }

  &[data-weekend="true"] {
    color: red;
  }

  &[data-outside="true"][data-weekend="true"] {
    color: pink;
  }
`;

export { Cell };
