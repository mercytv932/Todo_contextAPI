import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

function FilterButtons() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("FilterButtons must be used inside FilterProvider");
  }

  const { filter, setFilter } = context;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}

export default FilterButtons;
