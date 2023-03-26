import { action, createStore } from "easy-peasy";

interface IState {
    comment: string;
}

export const easyPeasyStore = createStore({
    comment: 'Skillbox',
    setComment: action<IState>((state, payload) => {
      state.comment = payload;
    }),
  });