import React from 'react';

import Task from '../task';

import './task-list.css';

const TaskList = (props) => {
  const { tasks, onComplete, onDeleted, onEditStart, onEditEnd } = props;
  const taskElems = tasks.map((task) => (
    <Task
      {...task}
      key={task.id}
      onComplete={() => onComplete(task.id)}
      onDeleted={() => onDeleted(task.id)}
      onEditStart={() => onEditStart(task.id)}
      onEditEnd={(...args) => onEditEnd(...args)}
    />
  ));

  return <ul className="todo-list">{taskElems}</ul>;
};

export default TaskList;
