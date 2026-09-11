# Todo Context API App

A modern, feature-rich task management application built with React, TypeScript, and the React Context API. This app demonstrates best practices for state management, theming, and filtering in React applications.

## Features

- **Create & Manage Tasks** - Add, edit, and delete todos with ease
- **Task Completion Tracking** - Mark tasks as complete or incomplete
- **Smart Filtering** - View all tasks, active tasks, or completed tasks
- **Dark/Light Theme** - Toggle between light and dark modes
- **Persistent Storage** - Tasks are saved to browser's localStorage
- **Clear Completed** - Remove all completed tasks in one action
- **Responsive UI** - Works seamlessly on all device sizes
- **Type-Safe Code** - Full TypeScript support with strict type checking

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 6
- **State Management**: React Context API
- **Build Tool**: Vite
- **Styling**: CSS
- **Storage**: Browser localStorage
- **Linting**: ESLint with TypeScript support
- **Compiler**: React Compiler via Babel

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── TodoInput.tsx     # Input field for adding new todos
│   ├── TodoList.tsx      # List container for all todos
│   ├── TodoItem.tsx      # Individual todo item component
│   ├── FilterButtons.tsx # Filter control buttons
│   └── ThemeToggleButton.tsx # Theme switcher
├── contexts/            # React Context providers
│   ├── TodoContext.tsx   # Todo state and operations
│   ├── FilterContext.tsx # Filter state management
│   └── ThemeContext.tsx  # Theme state (light/dark)
├── types.ts            # TypeScript type definitions
├── App.tsx             # Root component with provider setup
└── main.tsx            # Application entry point
```

## State Management with Context API

### TodoContext

Manages all todo-related state and operations:

- `todos` - Array of all todo items
- `addTodo(text)` - Add a new todo
- `toggleTodo(id)` - Mark todo as complete/incomplete
- `deleteTodo(id)` - Remove a todo
- `editTodo(id, text)` - Update todo text
- `clearCompleted()` - Remove all completed todos

### FilterContext

Manages filter state:

- Filter todos by status (all, active, completed)

### ThemeContext

Manages theme state:

- Toggle between light and dark mode

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```bash
   cd todo-context-api
   ```

3. Install dependencies
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Usage Guide

### Adding a Todo

1. Type your task in the input field at the top
2. Press Enter or click the add button to create the todo

### Managing Tasks

- **Complete a Task** - Click the checkbox to mark as done
- **Edit a Task** - Click on the task text to edit it
- **Delete a Task** - Click the delete button to remove it

### Filtering Tasks

Use the filter buttons to view:

- **All** - Display all todos
- **Active** - Show only incomplete tasks
- **Completed** - Show only completed tasks

### Switching Themes

Click the theme toggle button to switch between light and dark modes

### Data Persistence

All todos are automatically saved to your browser's localStorage. They will persist even after closing the browser.

## Component Architecture

### TodoInput

Handles the creation of new todos. Validates input and prevents empty todos from being added.

### TodoList

Displays todos based on the current filter. Maps over todo array and renders individual TodoItem components.

### TodoItem

Represents a single todo with options to complete, edit, or delete.

### FilterButtons

Provides filter selection controls to show all, active, or completed todos.

### ThemeToggleButton

Simple toggle button to switch between light and dark themes.

## Best Practices Demonstrated

- **Context API Usage** - Multiple contexts for different concerns (todos, filters, theme)
- **TypeScript Interfaces** - Strongly typed state and context
- **Component Composition** - Reusable and maintainable components
- **localStorage Integration** - Persistent state management
- **Error Handling** - Proper error checks for context usage
- **React Hooks** - `useState`, `useContext`, and `useEffect` patterns
- **Performance** - React Compiler optimization enabled

## Development Notes

- The React Compiler is enabled for improved performance optimization
- All state is managed through Context providers at the root level
- Components follow the container/presentation pattern for better maintainability
- localStorage is synced with state automatically via useEffect

## Contributing

When contributing to this project:

1. Follow the existing component structure and naming conventions
2. Maintain TypeScript strict typing throughout
3. Run `npm run lint` before committing code
4. Ensure all new features are tested in both light and dark themes
5. Keep components focused and single-purpose

## License

This project is part of the 2026-RTT-27 training program.

---

**Last Updated**: 2026-09-11
