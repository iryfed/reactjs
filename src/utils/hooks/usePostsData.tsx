import { useEffect } from 'react';
import { useToken } from './useToken';
import { useDispatch, useSelector } from 'react-redux';
import { IPostsData, postRequestAsync } from '../../shared/redux/reducers/postReducer';
import { RootState } from '../../shared/redux/reducers/rootReducer';


export function usePostsData() {
  const data = useSelector<RootState, IPostsData>(state => state.post.data);
  const token = useToken();
  const dispatch = useDispatch();

  useEffect(() => {

    if(!token || token === "undefined") return;
      dispatch(postRequestAsync());
      
  }, [token])

  return [data]
}