import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={uuidv4()} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
