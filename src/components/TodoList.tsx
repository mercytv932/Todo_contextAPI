import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoList() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoList  must be used inside TodoProvider");
  }

  const { todos } = context;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default TodoList;
