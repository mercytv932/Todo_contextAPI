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

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: number){
    setTodos((prev)=> prev.map((todo)=> todo.id ===id ?{...todo, completed: ~todo.completed}))
  }

  function editTodo(id:number, text: string){
    setTodos((prev)=> prev.map((todo)=> todo.id ===id ?{...todo, text: text} : todo))
  }

  function clearCompleted(){
    setTodos((prev)=>prev.filter((todo)=> !todo.completed))
  }

  return <div></div>;
}
