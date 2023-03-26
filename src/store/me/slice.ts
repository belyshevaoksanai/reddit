import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUserData } from "../../hooks/useUserData";

const initialState = {
    loading: false,
    error: '',
    data: {},
}

export const me = createSlice({
    name: 'me',
    initialState,
    reducers: {
        fetchData: (state) => {
            state.loading = true;
        },
        fetchSuccess: ((state, payload) => {
            state.loading = false;
            state.data = payload.payload;
        }) as CaseReducer<typeof initialState, PayloadAction<IUserData>>,
        fetchFailure: ((state, payload) => {
            state.loading = false;
            state.error = payload.payload;
        }) as CaseReducer<typeof initialState, PayloadAction<string>>,
    }
})

export const meActions = me.actions;
