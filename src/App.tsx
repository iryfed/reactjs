import React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout/Layout.tsx';
import { Header } from './shared/Header/Header.tsx';
import { Content } from './shared/Content/Content.tsx';
import { CardsList } from './shared/CardsList/CardsList.tsx';
import { SearchBlock } from './shared/SearchBlock/SearchBlock.tsx';
import { ThreadTitle } from './shared/ThreadTitle/ThreadTitle.tsx';
import { SortBlock } from './shared/SortBlock/SortBlock.tsx';


export function App() {
  return (
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
  );
}
