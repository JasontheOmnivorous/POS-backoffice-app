import { createSlice } from "@reduxjs/toolkit";
import { InitialMenuSliceState } from "./../../types/menu";

// default states for this slice
const initialState: InitialMenuSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

// all slices combined => the store
// same with ideology of all react components combined => an app
export const menuSlice = createSlice({
  name: "menu", // name of the slice
  initialState,
  reducers: {
    // setup action to change initialState state
    // state's value is current/latest state of the initialState
    // when we make a function inside createSlice that changes the state, redux will assume this as an action
    setMenus: (state, action) => {
      state.items = action.payload; // changes items' value to payload
    },
  },
});

export const { setMenus } = menuSlice.actions; // export retuned action
export default menuSlice.reducer; // export the returned reducer after calling createSlice function
