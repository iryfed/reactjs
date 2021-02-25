import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../../shared/redux/store';
import { setToken } from '../../shared/redux/tokenReducer';

export function useToken() {
  const [tokenState, setTokenState] = useState('');
  const token = store.getState().tokenReducer.token;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__))
      setTokenState(window.__token__);
    }
  }, [])

  return token;
}