import React from 'react';
import ArticleDetails from './article-details/ArticleDetails';
import './article-view.scss';

export default function ArticleView() {
  return (
    <div className="article-view_container">
      <ArticleDetails />
    </div>
  );
}
