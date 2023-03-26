import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { saveToken } from "../store/token";

export function useToken() {
    const dispatch = useDispatch();

    useEffect(() => {
        (dispatch as ThunkDispatch<RootState, void, AnyAction>)(saveToken());
    }, []);
}
