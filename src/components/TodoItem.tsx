import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import type { Todo } from "../types";

function TodoItem({ todo }: { todo: Todo }) {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoItem must  be used inside TodoProvider");
  }

  const { toggleTodo, deleteTodo, editTodo } = context;

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? "undo" : "complete"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
