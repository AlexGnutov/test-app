import React from 'react';
import './article-details.scss';
import { useSelector } from 'react-redux';

export default function ArticleDetails() {
  const { data } = useSelector((state) => state.data);
  const { current, loading, error } = useSelector((state) => state.view);

  if (loading) {
    return (
      <div className="article-details_container">
        Loading
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-details_container">
        Error
      </div>
    );
  }

  return (
    <div className="article-details_container">

      { current
        ? (
          <>
            <p>
              Title:
              {' '}
              {current.title}
            </p>
            <p>
              Author:
              {' '}
              {current.author}
            </p>
            <p>
              Text:
              {' '}
              {current.text}
            </p>
            <p>
              ID:
              {' '}
              {current.id}
            </p>
            <p>
              Language:
              {' '}
              {current.language}
            </p>
            <p>
              References:
            </p>
            <ul>
              {
                            current.references.map((link) => <li>{data[link][0]}</li>)
                        }
            </ul>
          </>
        ) : <p>Please, select article for detailed view</p> }
    </div>
  );
}
