import React from 'react'

import NewTaskForm from "../new-task-form"
import TaskList from "../task-list/task-list"
import Footer from "../footer"

import './app.css'

export default class App extends React.Component {

    state = {
        tasks: [
            {
                description: 'Completed task',
                createTime: new Date(),
                // status: 'completed',
                status: null,
                id: 'task1'
            },
            {
                description: 'Editing task',
                createTime: new Date(),
                // status: 'editing',
                status: null,
                id: 'task2'
            },
            {
                description: 'Active task',
                createTime: new Date(),
                status: null,
                id: 'task3'
            }
        ]
    }

    completeTaskHandler = (id) => {
        const tasksArr = [...this.state.tasks]
        const completedTaskIdx = tasksArr.findIndex(task => task.id === id)
        const taskStatus = tasksArr[completedTaskIdx].status

        tasksArr[completedTaskIdx].status = taskStatus !== 'completed' ? 'completed' : null

        this.setState(() => ({
            tasks: tasksArr
        }))
    }

    deleteTaskHandler = id => {
        this.setState(() => ({
            tasks: this.state.tasks.filter(task => task.id !== id)
        }))
    }

    render() {

        const {tasks} = this.state

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm/>
                </header>
                <section className="main">
                    <TaskList
                        tasks={tasks}
                        onComplete={this.completeTaskHandler}
                        onDeleted={this.deleteTaskHandler}
                    />
                </section>
                <Footer/>
            </section>
        )
    }
}