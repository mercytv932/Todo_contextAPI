import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoInput() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoInput must be used inside TodoProvider");
  }

  const { addTodo } = context;

  return (
    <div>
      <input type="text" placeholder="Add a todo..." />
      <button>Add</button>
    </div>
  );
}
