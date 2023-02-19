import { createSlice } from '@reduxjs/toolkit';

import { createTask } from '../../lib/create-task';

const initialState = {
  lastId: 100,
  tasks: [],
  timers: {},
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { label, time } = action.payload;
      const id = ++state.lastId;
      const task = createTask(label, id);

      state.tasks = [task, ...state.tasks];
      state.timers = {
        ...state.timers,
        [id]: time,
      };
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
    decreaseTimer: (state, action) => {
      const id = action.payload;
      const oldValue = state.timers[id];
      const newValue = oldValue > 0 ? oldValue - 1 : 0;

      state.timers = {
        ...state.timers,
        [id]: newValue,
      };
    },
  },
});

export const { addTask, removeTask, editTask, setTaskList, decreaseTimer } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectTimers = (state) => state.tasks.timers;

export default tasksSlice.reducer;
