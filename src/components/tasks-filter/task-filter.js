import React from 'react'

import './task-filter.css'

export default class TaskFilter extends React.Component {

    state = {
        filters: [
            {label: 'All', param: 'all', active: true},
            {label: 'Active', param: 'active', active: false},
            {label: 'Completed', param: 'completed', active: false}
        ]
    }

    filterHandler(param) {
        this.setState((state) => {
            const {onFilter} = this.props
            const filters = state.filters.map(filter => {
                return {
                    ...filter,
                    active: filter.param === param
                }
            })

            onFilter(param)

            return {
                filters
            }
        })
    }

    render() {
        const {filters} = this.state
        const filtersElems = filters.map(filter => {
            return (
                <li key={filter.param}>
                    <button
                        type="button"
                        className={filter.active ? 'selected' : ''}
                        onClick={() => this.filterHandler(filter.param)}
                    >{filter.label}</button>
                </li>
            )
        })

        return (
            <ul className="filters">
                {filtersElems}
            </ul>
        )
    }

}