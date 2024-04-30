import { StoredTodoType } from "@/types/todo";

export const setLocalStorageTodos = (data: StoredTodoType[]) => {
  localStorage.setItem("todos", JSON.stringify(data));
};
