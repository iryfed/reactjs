import { ActionCreator, Reducer } from "redux";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT,
  text: string,
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
});

export type commentState = {
    commentText: string;
  }
  
export const initialState: commentState = {
    commentText: 'Привет, ',
  }
  
const commentReducer: Reducer<commentState> = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    default:
      return state;
    }
  }

export default commentReducer;