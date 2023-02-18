import React from 'react';
import { useDispatch } from 'react-redux';

import './task-filter.css';

import { useFilters } from '../../hooks/use-filters';
import { changeFilter } from '../../store/slices/filter-slice';

const TaskFilter = () => {
  const [filters, changeFilters] = useFilters();
  const dispatch = useDispatch();

  const onFilter = (param) => {
    dispatch(changeFilter(param));
    changeFilters(param);
  };

  const filtersElems = filters.map((filter) => {
    const className = filter.active ? 'selected' : '';

    return (
      <li key={filter.param}>
        <button type="button" className={className} onClick={() => onFilter(filter.param)}>
          {filter.label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{filtersElems}</ul>;
};

export default TaskFilter;
