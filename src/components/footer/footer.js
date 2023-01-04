import React from 'react'

import './footer.css'

import TaskFilter from "../tasks-filter"

const Footer = (props) => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>

            <TaskFilter />

            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer