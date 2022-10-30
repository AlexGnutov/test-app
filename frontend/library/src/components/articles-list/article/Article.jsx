import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './article.scss';
import * as PropTypes from 'prop-types';
import ToggleButton from './toggle-button/ToggleButton';
import SourcesCount from './sources/SourcesCount';
import { loadCurrentThunk } from '../../../store/thunks/data-thunk';

export default function Article(props) {
  const { root, level, isRoot } = props;
  const { data, tree } = useSelector((state) => state.data);
  const { viewDeep } = useSelector((state) => state.config);

  const dispatch = useDispatch();
  const loadArticle = () => {
    dispatch(loadCurrentThunk(root));
  };

  const [opened, setOpened] = useState(false);
  const toggle = () => {
    setOpened(!opened);
  };

  const title = data[root][0];
  const author = data[root][1];
  const language = data[root][2];
  const subNodes = tree[root];

  return (
    <div className="article-item_container">

      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="article-item_header" onClick={loadArticle}>
        <a
          className={`article-item_header__link article-item_header__link-${language}`}
          href="#0"
          onClick={(e) => e.preventDefault()}
        >
          {title}
        </a>
        <div className="article-item_header__author">{author}</div>

        {subNodes?.length > 0 && !isRoot
          ? (
            <div className="article-item_header__corner-group">
              <SourcesCount
                sourcesNumber={subNodes.length}
              />
              <ToggleButton
                onClick={toggle}
                opened={opened}
              />
            </div>
          ) : null}
      </div>

      {subNodes && subNodes.length > 0
        ? (
          <div className={opened || level < viewDeep ? 'article-item_content' : 'hidden'}>
            {subNodes.map((x) => <Article root={x} level={level + 1} isRoot={false} />)}
          </div>
        )
        : null }
    </div>
  );
}

Article.propTypes = {
  level: PropTypes.number.isRequired,
  root: PropTypes.number.isRequired,
  isRoot: PropTypes.bool.isRequired,
};
