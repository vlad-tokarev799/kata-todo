import React from 'react'

import Task from "../task"

import './task-list.css'

const TaskList = (props) => {

    const taskElems = props.tasks.map(task => {
        return (
            <Task
                { ...task }
                key={task.id}
                onComplete={() => props.onComplete(task.id)}
                onDeleted={() => props.onDeleted(task.id)}
            />
        )
    })

    return (
        <ul className="todo-list">
            {taskElems}
        </ul>
    )
}

export default TaskList