import config from "@/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateMenuPayload,
  InitialMenuSliceState,
  UpdateMenuPayload,
} from "./../../types/menu";

// default states for this slice
const initialState: InitialMenuSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

// seperate data sending mechanism from the components due to Seperation of Concerns
// thunk literally means an async action
export const createMenu = createAsyncThunk(
  "menu/createMenu", // specify the redux state name to see clearly in redux dev tools
  async (payload: CreateMenuPayload, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload), // passed data sent as req.body
    });
    const menus = await response.json(); // catch returned data
    // use setMenus actions to change the state of menuSlice with returned data
    thunkApi.dispatch(setMenus(menus));
  }
);

export const updateMenu = createAsyncThunk(
  "menu/updateMenu",
  async (payload: UpdateMenuPayload, thunkApi) => {
    console.log(payload);
  }
);

// all slices combined => the store
// same with ideology of all react components combined => an app
export const menuSlice = createSlice({
  name: "menu", // name of the slice
  initialState,
  reducers: {
    // setup action to change initialState value
    // state's value is current/latest state of the initialState
    // when we make a function inside createSlice's reducer that changes the state, redux will assume this as an action
    // NOTE: actions inside reducer's obj value are pure functions, means they cant be async
    setMenus: (state, action) => {
      state.items = action.payload; // changes items' value to payload
    },
  },
});

export const { setMenus } = menuSlice.actions; // export retuned action
export default menuSlice.reducer; // export the returned reducer after calling createSlice function
