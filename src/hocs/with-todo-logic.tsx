import React, {
  type ChangeEvent,
  type ComponentType,
  useState,
} from "react";

import Todo from "@/components/todo/todo";
import { getLocalStorageTodos } from "@/utils/todoUtils/get-localstorage-todos";
import { setLocalStorageTodos } from "@/utils/todoUtils/set-localstorage-todos";

export function withTodoLogic(Component: ComponentType<unknown>, date: Date) {
  return function todoLogic() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState(() => getLocalStorageTodos());

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    };

    const handleAddTodo = () => {
      const newTodos = [
        ...getLocalStorageTodos(),
        { id: Date.now(), text: inputText, date: date },
      ];
      setTodos(newTodos);
      setLocalStorageTodos(newTodos);
      setInputText("");
    };

    const handleRemoveTodo = (id: number) => () => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);

      setTodos(filteredTodos);
      setLocalStorageTodos(filteredTodos);
    };

    return (
      <>
        <Component />
        <Todo
          inputText={inputText}
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
          handleRemoveTodo={handleRemoveTodo}
          todos={todos}
          date={date}
        />
      </>
    );
  };
}
