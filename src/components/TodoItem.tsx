import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import type { Todo } from "../types";

function TodoItem({ todo }: { todo: Todo }) {
  const context = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  if (!context) {
    throw new Error("TodoItem must be used inside TodoProvider");
  }

  const { toggleTodo, deleteTodo, editTodo } = context;

  function handleEdit() {
    const text = editText.trim();

    if (!text) {
      return;
    }

    editTodo(todo.id, text);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "undo" : "complete"}
          </button>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
