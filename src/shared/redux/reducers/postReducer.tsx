import axios from "axios";
import { Action, ActionCreator, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";

export const POST_REQUEST = 'POST_REQUEST';
export type PostRequestAction = {
    type: typeof POST_REQUEST;
}
export const PostRequest: ActionCreator<PostRequestAction> = () => ({
    type: POST_REQUEST,
});

export interface IPostsData {
    dist ?: number;
    postsList ?: [];
}

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
    type: typeof POST_REQUEST_SUCCESS;
    data: IPostsData;
}
export const PostRequestSuccess: ActionCreator<PostRequestSuccessAction> = (data: IPostsData) => ({
    type: POST_REQUEST_SUCCESS,
    data,
});

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostRequestErrorAction = {
    type: typeof POST_REQUEST_ERROR;
    error: string;
}
export const PostRequestError: ActionCreator<PostRequestErrorAction> = (error: string) => ({
    type: POST_REQUEST_ERROR,
    error,
});

export type PostState = {
  loading: boolean,
  error: string,
  data: IPostsData,
}

const initialState: PostState = {
  loading: false,
  error: '',
  data: {},
}

type PostActions = PostRequestAction
  | PostRequestSuccessAction
  | PostRequestErrorAction;

export const postReducer: Reducer<PostState, PostActions> = (state=initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export const postRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(PostRequest());
    
    axios.get(
      'https://oauth.reddit.com/best?limit=10',
      {
        headers: { Authorization: `bearer ${getState().token.token}`}
      }
    ).then((resp) => {
      const postsData = resp.data;
     // setData({ dist: postsData.data.dist, postsList: postsData.data.children });
      dispatch(PostRequestSuccess({ dist: postsData.data.dist, postsList: postsData.data.children }));
    }).catch((error) => {
      dispatch(PostRequestError(String(error)));
    });

}