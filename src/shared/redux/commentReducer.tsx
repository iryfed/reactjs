import { ActionCreator, AnyAction, Reducer } from "redux";

export type commentState = {
    commentText: string;
  }
  
const initialState: commentState = {
    commentText: 'Привет, ',
  }
  
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
  });

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