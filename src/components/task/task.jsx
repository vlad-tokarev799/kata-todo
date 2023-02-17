import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import EditField from './edit-field';

const Task = (props) => {
  const { completed, editing, id, description, createTime, onComplete, onEditStart, onDeleted, onEditEnd } = props;
  console.log(description);
  const classNames = [completed ? 'completed' : '', editing ? 'editing' : ''].join(' ');
  const [taskLabel, setTaskLabel] = useState(description || '');

  const onTaskEdit = (e) => setTaskLabel(e.target.value);

  return (
    <li className={classNames} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" id={`${id}__check`} onChange={onComplete} checked={completed} />
        <label htmlFor={`${id}__check`}>
          <span className="description">{description}</span>
          <span className="created">{formatDistanceToNow(createTime)}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditStart} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>

      <EditField editing={editing} onTaskEdit={onTaskEdit} onEditEnd={onEditEnd} label={taskLabel} id={id} />
    </li>
  );
};

export default Task;
