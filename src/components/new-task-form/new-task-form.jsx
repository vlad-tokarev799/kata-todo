import React, { useState } from 'react';

import './new-task-form.css';

const NewTaskForm = (props) => {
  const { onTaskCreate } = props;
  const [label, setLabel] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    onTaskCreate(label);
    setLabel('');
  };

  const changeHandler = (e) => {
    setLabel(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={changeHandler}
        value={label}
      />
    </form>
  );
};

export default NewTaskForm;
