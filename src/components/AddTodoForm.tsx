import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  const handleAnotherClick = (event: any) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        Add Todo
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          console.log(event);
        }}
      >
        another button
      </button>
      <button onClick={handleAnotherClick}>yet another button</button>
    </form>
  );
};
