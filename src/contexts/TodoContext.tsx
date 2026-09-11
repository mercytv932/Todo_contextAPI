import type { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import type { Todo } from "../types";
export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
  clearCompleted: () => void;
}
const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function editTodo(id: number, text: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
