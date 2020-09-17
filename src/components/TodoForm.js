import React, { useState } from 'react';

function TodoForm(props) {
  const [input, SetInput] = useState('');
  const handleChange = (e) => {
    SetInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //Props data into other components
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
    });

    SetInput('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      ></input>
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
