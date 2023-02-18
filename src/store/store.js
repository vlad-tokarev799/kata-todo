import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './slices/tasks-slice';
import filterReducer from './slices/filter-slice';

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
