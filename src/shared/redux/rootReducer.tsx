import commentReducer from './commentReducer';
import { combineReducers } from 'redux';
import { tokenReducer } from './tokenReducer';

export const rootReducer = combineReducers({
    commentReducer,
    tokenReducer
});

export default rootReducer;