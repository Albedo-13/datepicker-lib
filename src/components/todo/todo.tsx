import React from "react";

import { TodoProps } from "@/types/todo";
import { isDatesEqual } from "@/utils";

export default function Todo({
  inputText,
  handleInputChange,
  handleAddTodo,
  handleRemoveTodo,
  todos,
  date,
}: TodoProps) {
  return (
    <div>
      <input
        value={inputText}
        onChange={handleInputChange}
        type="text"
        placeholder="Add Todo"
      />
      <button onClick={handleAddTodo}>add todo</button>
      {todos
        .filter((todo) => isDatesEqual(new Date(todo.date), date))
        .map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button onClick={handleRemoveTodo(todo.id)}>remove</button>
          </div>
        ))}
    </div>
  );
}
