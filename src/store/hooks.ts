import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./index";

// use this guy to send data to the store (dispatch action)
export const useAppDispatch: () => AppDispatch = useDispatch;
// use this guy to get data from the store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
