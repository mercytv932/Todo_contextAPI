import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <div>
      <TodoProvider>
        <FilterProvider>
          <ThemeProvider></ThemeProvider>
        </FilterProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
