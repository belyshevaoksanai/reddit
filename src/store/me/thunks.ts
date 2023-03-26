import { Action } from "@reduxjs/toolkit";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { meActions } from "./slice";

export const meRequestAsync = ():ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meActions.fetchData());
        axios.get('https://oauth.reddit.com/api/v1/me', {
              headers: {Authorization: `Bearer ${getState().token.token}`}
          })
              .then((resp) => {
                  const userData = resp.data;
                  dispatch(meActions.fetchSuccess({
                    name: userData.name,
                    iconImg: userData.snoovatar_img,
                  }));
              })
              .catch((e) => {
                console.log(e);
                dispatch(meActions.fetchFailure(String(e)));
              })
}

