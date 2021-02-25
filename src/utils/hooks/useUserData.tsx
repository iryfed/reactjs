import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToken } from './useToken';

interface IUserData {
    name ?: string;
    iconImg ?: string;
  }

export function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useToken();

  useEffect(() => {

      axios.get(
        'https://oauth.reddit.com/api/v1/me',
        {
          headers: { Authorization: `bearer ${token}`}
        }
      ).then((resp) => {
        const userData = resp.data;
        setData({ iconImg: userData.icon_img, name: userData.name });
      }).catch(console.log)

  }, [token])

    return [data]
}