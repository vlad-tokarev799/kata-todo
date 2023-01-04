import React from 'react'

import NewTaskForm from "../new-task-form"
import TaskList from "../task-list/task-list"
import Footer from "../footer"

import './app.css'

const App = (props) => {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className="main">
                <TaskList tasks={props.tasks} />
            </section>
            <Footer />
        </section>
    )
}

export default App