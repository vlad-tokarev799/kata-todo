import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app'

const tasks = [
    {
        description: 'Completed task',
        createTime: new Date(),
        status: 'completed',
        id: 'task1'
    },
    {
        description: 'Editing task',
        createTime: new Date(),
        status: 'editing',
        id: 'task2'
    },
    {
        description: 'Active task',
        createTime: new Date(),
        status: null,
        id: 'task3'
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={tasks} />);


