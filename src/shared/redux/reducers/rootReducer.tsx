import { Reducer } from 'redux';
import { SetTokenAction, SET_TOKEN, tokenReducer, tokenState } from './tokenReducer';
import { meReducer, meState, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './meReducer';
import commentReducer, { commentState, UpdateCommentAction, UPDATE_COMMENT } from './commentReducer';
import { PostRequestAction, PostRequestSuccessAction, PostRequestErrorAction, POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, postReducer, PostState } from './postReducer';

export type RootState = {
  token: tokenState;
  me: meState;
  post: PostState;
  comment: commentState;
}

const initialState: RootState = {
  token: {
    token: '',
  },
  me: {
    loading: false,
    error: '',
    data: {},
  },
  post: {
    loading: false,
    error: '',
    data: {},
  },
  comment: {
    commentText: 'Привет, ',
  }
}

type RootActions = SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | UpdateCommentAction
  | PostRequestAction
  | PostRequestSuccessAction
  | PostRequestErrorAction;

export const rootReducer: Reducer<RootState, RootActions> = (state=initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    case POST_REQUEST:
    case POST_REQUEST_SUCCESS:
    case POST_REQUEST_ERROR:
      return {
        ...state,
        post: postReducer(state.post, action),
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: commentReducer(state.comment, action),
      }
    default:
      return state;
  }
}

export default rootReducer;