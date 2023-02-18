import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './new-task-form.css';
import { addTask } from '../../store/slices/tasks-slice';

const NewTaskForm = () => {
  const [label, setLabel] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTask(label));
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
