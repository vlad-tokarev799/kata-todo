import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './footer.css';

import TaskFilter from '../tasks-filter';

export default class Footer extends Component {
  static defaultProps = {
    todoCount: 0,
    onFilter: () => {},
    onClearActive: () => {},
  };

  static propTypes = {
    todoCount: PropTypes.number,
    onFilter: PropTypes.func,
    onClearActive: PropTypes.func,
  };

  render() {
    const { todoCount, onFilter, onClearActive, filters } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>

        <TaskFilter onFilter={onFilter} filters={filters} />

        <button className="clear-completed" onClick={onClearActive}>
          Clear completed
        </button>
      </footer>
    );
  }
}
