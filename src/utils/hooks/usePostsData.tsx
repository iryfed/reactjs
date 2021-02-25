import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToken } from './useToken';

interface IPostsData {
    dist ?: number;
    postsList ?: [];
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({});
  const token = useToken();

  useEffect(() => {
    
      axios.get(
            'https://oauth.reddit.com/best?limit=10',
            {
              headers: { Authorization: `bearer ${token}`}
            }
      ).then((resp) => {
          const postsData = resp.data;
        setData({ dist: postsData.data.dist, postsList: postsData.data.children });
      }).catch(console.log)
    
    }, [token])

    return [data]
}