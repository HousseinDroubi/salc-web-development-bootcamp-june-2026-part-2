import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { type AppDispatch, type RootState } from "./store";

// Pre-typed `useSelector` hook so `state` is automatically typed as `RootState`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Pre-typed `useDispatch` hook that knows about `AppDispatch` (actions and thunks)
export const useAppDispatch = () => useDispatch<AppDispatch>();
