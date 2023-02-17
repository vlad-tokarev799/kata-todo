import React from 'react';

import './task-filter.css';

const TaskFilter = (props) => {
  const { onFilter, filters } = props;
  const filtersElems = filters.map((filter) => (
    <li key={filter.param}>
      <button type="button" className={filter.active ? 'selected' : ''} onClick={() => onFilter(filter.param)}>
        {filter.label}
      </button>
    </li>
  ));

  return <ul className="filters">{filtersElems}</ul>;
};

export default TaskFilter;
