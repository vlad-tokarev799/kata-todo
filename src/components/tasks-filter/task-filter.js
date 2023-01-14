import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './task-filter.css';

export default class TaskFilter extends Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
  };

  render() {
    const { onFilter, filters } = this.props;

    const filtersElems = filters.map((filter) => (
      <li key={filter.param}>
        <button type="button" className={filter.active ? 'selected' : ''} onClick={() => onFilter(filter.param)}>
          {filter.label}
        </button>
      </li>
    ));

    return <ul className="filters">{filtersElems}</ul>;
  }
}
