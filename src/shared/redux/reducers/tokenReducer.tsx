import { Reducer } from "redux";
import { ActionCreator } from "redux";

export const SET_TOKEN = 'SET_TOKEN';

export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
});

export type tokenState = {
    token: string;
  }
  
export const initialState: tokenState = {
    token: '',
  }

export const tokenReducer: Reducer<tokenState> = (state=initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
        return {
          ...state,
          token: action.token
        }
    default:
        return state
  }
}

export default tokenReducer;