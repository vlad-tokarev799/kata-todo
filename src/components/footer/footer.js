import React from 'react'

import './footer.css'

import TaskFilter from "../tasks-filter"

const Footer = (props) => {
    return (
        <footer className="footer">
            <span className="todo-count">{props.todoCount} items left</span>

            <TaskFilter onFilter={props.onFilter}/>

            <button
                className="clear-completed"
                onClick={props.onClearActive}
            >Clear completed</button>
        </footer>
    )
}

export default Footer