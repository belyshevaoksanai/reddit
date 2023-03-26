import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { meSelector, meRequestAsync } from "../store/me";
import { RootState } from "../store/store";
import { tokenSelector } from "../store/token";

export interface IUserData {
    name?: string;
    iconImg?: string;
    bannerImg?: string;
  }

export function useUserData() {
    const dispatch = useDispatch(); 
    const token = useSelector(tokenSelector);
    const { data, loading } = useSelector<RootState, {data: IUserData, loading: boolean}>(meSelector);

    useEffect(() => {
      if (token) {
        (dispatch as ThunkDispatch<RootState, void, AnyAction>)(meRequestAsync());
      }
    }, [token]);

    return {
      data, loading
    };
}