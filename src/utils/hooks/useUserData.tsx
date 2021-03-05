import { useEffect } from 'react';
import { useToken } from './useToken';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/redux/reducers/rootReducer';
import { IUserData, meRequestAsync } from '../../shared/redux/reducers/meReducer';


export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);
  const token = useToken();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!token || token === "undefined") return;
    dispatch(meRequestAsync());
  }, [token])

  return {
    data,
    loading,
  }
}
