import React from 'react'
import { formatDistanceToNow } from 'date-fns'

import './task.css'

export default class Task extends React.Component {

    state = {
        taskLabel: this.props.description
    }

    onTaskEdit = (e) => {
        this.setState({
            taskLabel: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()

        const {onEditEnd, id} = this.props
        const {taskLabel} = this.state

        onEditEnd(taskLabel, id)
    }

    EditField = () => {
        const {editing} = this.props

        if (editing) {
            return (<form onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    className="edit"
                    value={this.state.taskLabel}
                    onChange={this.onTaskEdit}
                />
            </form>)
        }
    }

    render() {
        const {
            completed,
            editing,
            id,
            description,
            createTime,
            onComplete,
            onEditStart,
            onDeleted
        } = this.props

        const classNames = [
            (completed ? 'completed' : ''),
            (editing ? 'editing' : '')
        ].join(' ')

        return (
            <li className={ classNames } key={id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        id={`${id}__check`}
                        onChange={onComplete}
                        checked={completed}
                    />
                    <label htmlFor={`${id}__check`}>
                        <span className="description">{description}</span>
                        <span className="created">{ formatDistanceToNow(createTime) }</span>
                    </label>
                    <button
                        className="icon icon-edit"
                        onClick={ onEditStart }
                    ></button>
                    <button
                        className="icon icon-destroy"
                        onClick={ onDeleted }
                    ></button>
                </div>

                { this.EditField() }

            </li>
        )
    }

}