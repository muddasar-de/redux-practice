import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.push(actions.payload);
    },
    remove: (state, actions) => {
      console.log("id", actions.payload);
      // state.splice(state[actions.payload], 1);
      return state.filter((item) => item.title !== actions.payload);
      // return state;
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
