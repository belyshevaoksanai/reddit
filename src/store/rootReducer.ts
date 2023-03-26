import { combineReducers } from "@reduxjs/toolkit";
import { commentForm } from "./commentForm";
import { me } from "./me";
import { token } from "./token";

export const rootReducer = combineReducers({
    commentForm: commentForm.reducer,
    token: token.reducer,
    me: me.reducer,
})