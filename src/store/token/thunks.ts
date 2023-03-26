import { Action, AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { token } from "./slice";

export const saveToken = ():ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    if (window.__token__ && window.__token__ !== 'undefined') {
        dispatch(token.actions.setToken(window.__token__));
    }
}

