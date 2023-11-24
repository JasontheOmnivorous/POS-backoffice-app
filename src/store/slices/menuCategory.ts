import config from "@/config";
import {
  CreateMenuCategoryPayload,
  InitialMenuCategorySliceState,
} from "@/types/menuCategory";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: InitialMenuCategorySliceState = {
  items: [],
  isLoading: false,
  error: null,
};

export const createMenuCategory = createAsyncThunk(
  "menuCategory/createMenuCategory",
  async (payload: CreateMenuCategoryPayload, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    thunkApi.dispatch(setMenuCategories(data));
  }
);

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategories: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuCategories } = menuCategorySlice.actions;
export default menuCategorySlice.reducer;
