import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useDispatch } from 'react-redux';

import './task.css';
import { editTask, removeTask } from '../../store/slices/tasks-slice';
import Timer from '../timer/timer';

import EditField from './edit-field';

const Task = (props) => {
  const { completed, id, description, createTime } = props;

  const [editing, setEditing] = useState(false);
  const [taskLabel, setTaskLabel] = useState(description || '');
  const [formattedCreateTime, setFormattedCreateTime] = useState(formatDistanceToNow(createTime));
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedCreateTime(formatDistanceToNow(createTime));
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getPayload = (props) => {
    return editTask({
      id,
      props,
    });
  };

  const onCompleteToggle = () => {
    const dispatchCb = getPayload({
      completed: !completed,
    });

    dispatch(dispatchCb);
  };
  const onEditEnd = () => {
    const dispatchCb = getPayload({
      description: taskLabel,
    });

    setEditing(false);
    dispatch(dispatchCb);
  };

  const onTaskEdit = (e) => setTaskLabel(e.target.value);

  const classNames = [completed ? 'completed' : '', editing ? 'editing' : ''].join(' ');

  return (
    <li className={classNames} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" id={`${id}__check`} onChange={onCompleteToggle} checked={completed} />
        <label htmlFor={`${id}__check`}>
          <span className="title">{description}</span>
          <Timer />
          <span className="description">{formattedCreateTime}</span>
        </label>
        <button className="icon icon-edit" onClick={() => setEditing(true)} />
        <button className="icon icon-destroy" onClick={() => dispatch(removeTask(id))} />
      </div>

      <EditField editing={editing} onTaskEdit={onTaskEdit} onEditEnd={onEditEnd} label={taskLabel} id={id} />
    </li>
  );
};

export default Task;
