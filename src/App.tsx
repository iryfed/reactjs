import React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { SearchBlock } from './shared/SearchBlock/SearchBlock';
import { ThreadTitle } from './shared/ThreadTitle/ThreadTitle';
import { SortBlock } from './shared/SortBlock/SortBlock';

import { Provider } from 'react-redux';
import { store } from './shared/redux/store';


function AppComponent() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export const App = () => <AppComponent />;