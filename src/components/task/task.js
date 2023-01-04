import React from 'react'

import './task.css'

const EditField = (props) => {
    return (<input type="text" className="edit" value={props.description} />)
}

const Task = (props) => {

    console.log(props)

    return (
        <li className={props.status} key={props.id}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{props.description}</span>
                    {/*<span className="created">{props.createTime.toString()}</span>*/}
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>

            { props.status === 'editing' ? <EditField description={props.description} /> : null }

        </li>
    )
}

export default Task