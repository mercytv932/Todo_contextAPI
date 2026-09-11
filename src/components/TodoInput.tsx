import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const [input, setInput] = useState("");

function TodoInput() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoInput must be used inside TodoProvider");
  }

  const { addTodo } = context;

  function handleSubmit() {
    const text = input.trim();

    if (!text) {
      return;
    }

    addTodo(text);
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
