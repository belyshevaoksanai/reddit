import { configureStore, Middleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>