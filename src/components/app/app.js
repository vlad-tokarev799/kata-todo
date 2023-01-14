import React, {Component} from 'react'

import NewTaskForm from "../new-task-form"
import TaskList from "../task-list/task-list"
import Footer from "../footer"

import './app.css'

export default class App extends Component {

    lastId = 100

    state = {
        tasks: [],
        activeFilter: 'all',
        filters: [
            {label: 'All', param: 'all', active: true},
            {label: 'Active', param: 'active', active: false},
            {label: 'Completed', param: 'completed', active: false}
        ]
    }

    createTask = (label) => {
        return {
            description: label,
            createTime: new Date(),
            completed: false,
            editing: false,
            id: this.lastId++
        }
    }

    toggleProperty = (arr, id, prop) => {
        const elIdx = arr.findIndex(el => el.id === id)
        const el = arr[elIdx]

        const newEl = {
            ...el,
            [prop]: !el[prop]
        }

        return [
            ...arr.slice(0, elIdx),
            newEl,
            ...arr.slice(elIdx + 1, arr.length)
        ]
    }

    getFilteredTasks = () => {
        const {activeFilter, tasks} = this.state

        if (activeFilter === 'all') {
            return tasks
        } else if (activeFilter === 'completed') {
            return tasks.filter(task => task.completed)
        } else if (activeFilter === 'active') {
            return tasks.filter(task => !task.completed)
        }
    }

    completeTaskHandler = (id) => {
        this.setState((state) => ({
            tasks: this.toggleProperty(state.tasks, id, 'completed')
        }))
    }

    deleteTaskHandler = (id) => {
        this.setState(() => ({
            tasks: this.state.tasks.filter(task => task.id !== id)
        }))
    }

    editStartTaskHandler = (id) => {
        this.setState((state) => {
            const tasks = state.tasks.map(task => {
                return {
                    ...task,
                    editing: false
                }
            })

            return {
                tasks: this.toggleProperty(tasks, id, 'editing')
            }
        })
    }

    editEndTaskHandler = (value, id) => {
        this.setState((state) => {
            const tasks = state.tasks.map(task => {
                return task.id !== id ? task : {
                    ...task,
                    editing: false,
                    description: value
                }
            })

            return {
                tasks
            }
        })
    }

    onTaskCreate = (label) => {
        this.setState((state) => {

            const tasks = [...state.tasks].reverse()
            tasks.push( this.createTask(label) )

            return { tasks: tasks.reverse() }
        })
    }

    onClearActive = () => {
        this.setState((state) => {
            return {
                tasks: state.tasks.filter(task => !task.completed)
            }
        })
    }

    filterHandler = (param) => {
        this.setState((state) => {
            const filters = state.filters.map(filter => {
                return {
                    ...filter,
                    active: filter.param === param
                }
            })

            return {
                filters,
                activeFilter: param
            }
        })
    }

    render() {
        const {tasks, filters} = this.state
        const filteredTasks = this.getFilteredTasks()
        const todoCount = tasks.filter(task => !task.completed).length

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm onTaskCreate={ this.onTaskCreate }/>
                </header>
                <section className="main">
                    <TaskList
                        tasks={filteredTasks}
                        onComplete={this.completeTaskHandler}
                        onDeleted={this.deleteTaskHandler}
                        onEditStart={this.editStartTaskHandler}
                        onEditEnd={this.editEndTaskHandler}
                    />
                </section>
                <Footer
                    todoCount={todoCount}
                    onFilter={this.filterHandler}
                    filters={filters}
                    onClearActive={this.onClearActive}
                />
            </section>
        )
    }
}