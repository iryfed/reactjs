import { ActionCreator, Reducer } from "redux";

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