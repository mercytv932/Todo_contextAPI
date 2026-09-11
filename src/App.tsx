import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div>
      <TodoProvider>
        <FilterProvider>
          <ThemeProvider>
            <h1>Todo App</h1>
            <ThemeToggleButton />
            <TodoInput />
            <FilterButtons />
            <TodoList />
          </ThemeProvider>
        </FilterProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
