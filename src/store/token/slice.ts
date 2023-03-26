import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    token: '',
}

export const token = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, {payload}: PayloadAction<string>) => {
            state.token = payload;
        }
    }
})

export const commentFormActions = token.actions;
