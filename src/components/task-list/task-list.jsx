import React from 'react';
import { useSelector } from 'react-redux';

import { selectTasks } from '../../store/slices/tasks-slice';
import { selectActiveFilter } from '../../store/slices/filter-slice';
import { filterTasks } from '../../lib/filter-tasks';
import Task from '../task';

import './task-list.css';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const activeFilter = useSelector(selectActiveFilter);

  const taskElems = filterTasks(tasks, activeFilter).map((task) => <Task {...task} key={task.id} />);

  return <ul className="todo-list">{taskElems}</ul>;
};

export default TaskList;
