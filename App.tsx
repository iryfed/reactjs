import React from 'react';
import './main.global.scss';
import { useToken } from './utils/hooks/useToken';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { SearchBlock } from './shared/SearchBlock/SearchBlock';
import { ThreadTitle } from './shared/ThreadTitle/ThreadTitle';
import { SortBlock } from './shared/SortBlock/SortBlock';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
    <UserContextProvider>
    <PostsContextProvider>
    <Layout>
      <Header>
        <SearchBlock />
        <ThreadTitle />
        <SortBlock />
      </Header>
      <Content>
        <CardsList />
      </Content>
    </Layout>
    </PostsContextProvider>
    </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = () => <AppComponent />;