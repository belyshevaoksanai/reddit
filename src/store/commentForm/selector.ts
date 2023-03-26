import { RootState } from "../store";

export const commentFormSelector = (state: RootState) => state.commentForm.value;
