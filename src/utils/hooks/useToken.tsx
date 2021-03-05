import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/redux/reducers/rootReducer';
import { setToken } from '../../shared/redux/reducers/tokenReducer';

export function useToken() {
  const token = useSelector<RootState, string>(state => state.token.token);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__))
    }
  }, []);

  return token;
}