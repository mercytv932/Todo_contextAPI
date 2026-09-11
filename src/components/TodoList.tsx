import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoList  must be used inside TodoProvider");
  }

  const { todos } = context;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
