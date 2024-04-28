import { ChangeEvent } from "react";

export type StoredTodoType = {
  id: number;
  text: string;
  date: Date;
};

export type TodoProps = {
  inputText: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: VoidFunction;
  handleRemoveTodo: (id: number) => VoidFunction;
  todos: StoredTodoType[];
  date: Date;
};
