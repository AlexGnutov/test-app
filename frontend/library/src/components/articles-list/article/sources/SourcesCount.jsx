import React from 'react';
import * as PropTypes from 'prop-types';
import './sources-count.scss';

export default function SourcesCount(props) {
  const { sourcesNumber } = props;

  return (
    <button type="button" className="sources-count grey-button">
      {sourcesNumber}
    </button>
  );
}

SourcesCount.propTypes = {
  sourcesNumber: PropTypes.number.isRequired,
};
