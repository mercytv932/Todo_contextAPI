import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

function TodoApp() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("App must be used inside ThemeProvider");
  }

  const { theme } = context;

  return (
    <div className={theme}>
      <h1>Todo App</h1>
      <ThemeToggleButton />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoProvider>
        <FilterProvider>
          <ThemeProvider>
            <TodoApp />
          </ThemeProvider>
        </FilterProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
