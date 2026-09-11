import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { Todo } from "../types";
export interface TodoContextType {
  todos: Todo[];
}
const TodoContext = createContext();

function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  return <div></div>;
}
