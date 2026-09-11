import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { TodoContext } from "../contexts/TodoContext";

function FilterButtons() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("FilterButtons must be used inside FilterProvider");
  }

  const { filter, setFilter } = context;

  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("FilterButtons must be used inside TodoProvider");
  }

  const { clearCompleted } = todoContext;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default FilterButtons;
