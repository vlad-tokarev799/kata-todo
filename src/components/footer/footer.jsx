import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './footer.css';

import TaskFilter from '../tasks-filter';
import { selectTasks, setTaskList } from '../../store/slices/tasks-slice';
import { changeFilter } from '../../store/slices/filter-slice';

const Footer = () => {
  const [todoCount, setTodoCount] = useState(0);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const count = tasks.filter((el) => !el.completed).length;

    setTodoCount(count);
  }, [tasks]);

  const onClearActive = () => {
    const activeTasks = tasks.filter((el) => !el.completed);

    dispatch(setTaskList(activeTasks));
    dispatch(changeFilter('all'));
  };

  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>

      <TaskFilter />

      <button className="clear-completed" onClick={onClearActive}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
