import React from 'react';
import { useSelector } from 'react-redux';

import { selectTasks } from '../../store/slices/tasks-slice';
import { selectActiveFilter } from '../../store/slices/filter-slice';
import Task from '../task';

import './task-list.css';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const activeFilter = useSelector(selectActiveFilter);

  const taskElems = tasks.map((task) => {
    const taskElem = <Task {...task} key={task.id} />;

    if (activeFilter === 'all') {
      return taskElem;
    } else if (activeFilter === 'active') {
      return !task.completed ? taskElem : null;
    } else if (activeFilter === 'completed') {
      return task.completed ? taskElem : null;
    }
  });

  return <ul className="todo-list">{taskElems}</ul>;
};

export default TaskList;
