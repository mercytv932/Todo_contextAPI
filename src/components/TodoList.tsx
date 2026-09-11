import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { FilterContext } from "../contexts/FilterContext";

function TodoList() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoList  must be used inside TodoProvider");
  }

  const { todos } = context;

  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    throw new Error("TodoList must be used inside FilterProvider");
  }

  const { filter } = filterContext;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
