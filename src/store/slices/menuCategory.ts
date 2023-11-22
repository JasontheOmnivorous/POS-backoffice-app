import { InitialMenuCategorySliceState } from "@/types/menuCategory";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialMenuCategorySliceState = {
  items: [],
  isLoading: false,
  error: null,
};

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
