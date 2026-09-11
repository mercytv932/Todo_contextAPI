import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <div>
      <TodoProvider>
        <FilterProvider>
          <ThemeProvider>
            <h1>Todo App</h1>
          </ThemeProvider>
        </FilterProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
