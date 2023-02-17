import React from 'react';

import './footer.css';

import TaskFilter from '../tasks-filter';

const Footer = (props) => {
  const { todoCount, onFilter, onClearActive, filters } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>

      <TaskFilter onFilter={onFilter} filters={filters} />

      <button className="clear-completed" onClick={onClearActive}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
