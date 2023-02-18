import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const selectActiveFilter = (state) => state.filter.activeFilter;

export default filterSlice.reducer;
