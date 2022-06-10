import React, { useState } from "react";
// import { arrayBuffer } from "stream/consumers";
// import Hello from "./components/hello"
// import logo from './logo.svg';
// import './App.css';

import { TodoListItem } from "./components/TodoListItem";

const initialTodos: Todo[] = [
  {
    text: "walk the dog",
    complete: false,
  },
  {
    text: "write app",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
