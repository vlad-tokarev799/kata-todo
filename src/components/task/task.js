import React from 'react'
import { formatDistanceToNow } from 'date-fns'

import './task.css'

const EditField = (props) => {
    return (<input type="text" className="edit" value={props.description} onChange={() => console.log('')} />)
}

const Task = (props) => {
    return (
        <li className={props.status} key={props.id}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    id={`${props.id}__check`}
                    onChange={props.onComplete}
                />
                <label htmlFor={`${props.id}__check`}>
                    <span className="description">{props.description}</span>
                    <span className="created">{ formatDistanceToNow(props.createTime) }</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={props.onDeleted}></button>
            </div>

            { props.status === 'editing' ? <EditField description={props.description} /> : null }

        </li>
    )
}

export default Task