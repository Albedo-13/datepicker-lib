import { StoredTodoType } from "@/types/todo";

export const getLocalStorageTodos = () => {
  const allTodos = localStorage.getItem("todos");
  return allTodos ? (JSON.parse(allTodos) as StoredTodoType[]) : [];
};
