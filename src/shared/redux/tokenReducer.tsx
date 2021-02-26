import { ActionCreator, AnyAction, Reducer } from "redux";

export type tokenState = {
    token: string;
  }
  
const initialState: tokenState = {
    token: '',
  }

const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (text) => ({
    type: SET_TOKEN,
    text,
});

export const tokenReducer: Reducer<tokenState> = (state=initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
        return {
          ...state,
          token: action.text
        }
    default:
        return state
  }
}

export default tokenReducer;