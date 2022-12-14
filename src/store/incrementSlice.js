import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const increamentSlice = createSlice({
  name: "increament",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.push(actions.payload);
    },
    remove: (state, actions) => {
      state = state.filter((item) => item.id !== actions.payload);
      return state;
    },
  },
});

export default increamentSlice.reducer;
export const { add, remove } = increamentSlice.actions;
