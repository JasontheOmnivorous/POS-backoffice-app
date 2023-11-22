import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menu";
import menuCategoryReducer from "./slices/menuCategory";

// config the whole redux store
export const store = configureStore({
  // combine all the reducers from the slices
  reducer: {
    menu: menuReducer,
    menuCategory: menuCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
