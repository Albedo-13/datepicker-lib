import React from "react";

import { TodoProps } from "@/types/todo";
import { isDatesEqual } from "@/utils";

import {
  TodoAddButton,
  TodoInput,
  TodoInputWrapper,
  TodoItem,
  TodoItemRemoveButton,
  TodoWrapper,
} from "./styles";

export default function Todo({
  inputText,
  handleInputChange,
  handleAddTodo,
  handleRemoveTodo,
  todos,
  date,
}: TodoProps) {
  return (
    <TodoWrapper>
      <TodoInputWrapper>
        <TodoInput
          value={inputText}
          onChange={handleInputChange}
          type="text"
          placeholder="Add Todo"
        />
        <TodoAddButton onClick={handleAddTodo}>Add</TodoAddButton>
      </TodoInputWrapper>
      {todos
        .filter((todo) => isDatesEqual(new Date(todo.date), date))
        .map((todo) => (
          <TodoItem key={todo.id}>
            {todo.text}
            <TodoItemRemoveButton
              onClick={handleRemoveTodo(todo.id)}
              aria-label="remove"
            >
              ✕
            </TodoItemRemoveButton>
          </TodoItem>
        ))}
    </TodoWrapper>
  );
}
