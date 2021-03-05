import axios from "axios";
import { Action, Reducer } from "redux";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";

export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
    type: typeof ME_REQUEST;
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST,
});

export interface IUserData {
  name ?: string;
  iconImg ?: string;
}
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData;
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data,
});

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR;
    error: string;
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error,
});

export type meState = {
  loading: boolean,
  error: string,
  data: IUserData,
}

const initialState: meState = {
  loading: false,
  error: '',
  data: {},
}

type MeActions = MeRequestAction 
  | MeRequestSuccessAction 
  | MeRequestErrorAction;

export const meReducer: Reducer<meState, MeActions> = (state=initialState, action) => {
    switch(action.type) {
      case ME_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case ME_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data,
        }
      case ME_REQUEST_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        }
      default: 
        return state;    
    }
}

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());

    axios.get(
      'https://oauth.reddit.com/api/v1/me',
      {
        headers: { Authorization: `bearer ${getState().token.token}`}
      }
    ).then((resp) => {
      const userData = resp.data;
      dispatch(meRequestSuccess({ iconImg: userData.icon_img, name: userData.name }));
    }).catch((error) => {
      console.log(error);
      dispatch(meRequestError(String(error)));
    });
}