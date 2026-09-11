import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { Todo } from "../types";
export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
}
const TodoContext = createContext();

function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  return <div></div>;
}
