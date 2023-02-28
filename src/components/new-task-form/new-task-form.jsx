import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './new-task-form.css';
import { addTask } from '../../store/slices/tasks-slice';

const NewTaskForm = () => {
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const time = Number(min) * 60 + Number(sec);

    if (label && time) {
      dispatch(addTask({ label, time }));
      setLabel('');
      setMin('');
      setSec('');
    }
  };

  return (
    <form className={'new-todo-form'} onSubmit={submitHandler}>
      <input className="new-todo" placeholder="Task" onChange={(e) => setLabel(e.target.value)} value={label} />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        onChange={(e) => setMin(e.target.value)}
        type={'number'}
        value={min}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        onChange={(e) => setSec(e.target.value)}
        type={'number'}
        value={sec}
      />
      <button type={'submit'}></button>
    </form>
  );
};

export default NewTaskForm;
