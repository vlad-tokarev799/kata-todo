import { createSlice } from '@reduxjs/toolkit';

import { createTask } from '../../lib/create-task';

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [createTask(action.payload), ...state.tasks];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { tasks } = state;
      const { id, props } = action.payload;

      const elIdx = tasks.findIndex((el) => el.id === id);
      const newEl = {
        ...tasks[elIdx],
        ...props,
      };

      state.tasks = [...tasks.slice(0, elIdx), newEl, ...tasks.slice(elIdx + 1, tasks.length)];
    },
    setTaskList: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, removeTask, editTask, setTaskList } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;
