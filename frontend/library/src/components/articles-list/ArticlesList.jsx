import React from 'react';
import { useSelector } from 'react-redux';
import Article from './article/Article';

import './article-list.scss';

export default function ArticlesList() {
  const { tree, loading, error } = useSelector((state) => state.data);

  if (loading) {
    return (<h1>Loading...</h1>);
  }
  if (error) {
    return (<h1>Error...</h1>);
  }

  const rootNodeKey = tree.root;

  return (
    <div className="article-list__container">

      <div className="article-list__content">
        {rootNodeKey
          ? <Article root={rootNodeKey} level={1} isRoot />
          : null}
      </div>
    </div>
  );
}
