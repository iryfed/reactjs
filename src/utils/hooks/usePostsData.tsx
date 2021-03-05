import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToken } from './useToken';
import { useDispatch, useSelector } from 'react-redux';
import { IPostsData, PostRequest, PostRequestError, PostRequestSuccess } from '../../shared/redux/reducers/postReducer';
import { RootState } from '../../shared/redux/reducers/rootReducer';


export function usePostsData() {
  //const [data, setData] = useState<IPostsData>({});
  const data = useSelector<RootState, IPostsData>(state => state.post.data);
  const token = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!token || token === "undefined") return;

    dispatch(PostRequest());
    
    axios.get(
      'https://oauth.reddit.com/best?limit=10',
      {
        headers: { Authorization: `bearer ${token}`}
      }
    ).then((resp) => {
      const postsData = resp.data;
     // setData({ dist: postsData.data.dist, postsList: postsData.data.children });
      dispatch(PostRequestSuccess({ dist: postsData.data.dist, postsList: postsData.data.children }));
    }).catch((error) => {
      dispatch(PostRequestError(String(error)));
    })
    
  }, [token])

  return [data]
}