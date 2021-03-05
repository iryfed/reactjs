import React from 'react';
import { useUserData } from '../../utils/hooks/useUserData';

export interface IUserContextData {
    name ?: string;
    iconImg ?: string;
    loading?: boolean;
  }

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const {data} = useUserData();
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}