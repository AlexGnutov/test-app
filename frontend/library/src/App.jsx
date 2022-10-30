import React from 'react';

import './App.css';
import ArticlesList from './components/articles-list/ArticlesList';
import TestBar from './components/test-bar/TestBar';
import ArticleView from './components/article-view/ArticleView';

function App() {
  return (
    <div className="container">
      <h1 className="app-header">Test App</h1>
      <main className="main-container">
        <ArticlesList />
        <ArticleView />
      </main>
      <TestBar />
    </div>
  );
}

export default App;
