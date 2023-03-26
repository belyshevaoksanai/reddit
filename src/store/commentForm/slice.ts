import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    value: 'Привет, Skillbox!',
}

export const commentForm = createSlice({
    name: 'commentForm',
    initialState,
    reducers: {
        updateComment: (state, {payload}: PayloadAction<string>) => {
            state.value = payload;
        }
    }
})

export const commentFormActions = commentForm.actions;
