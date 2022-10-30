import React from 'react';

import * as PropTypes from 'prop-types';
import './toggle-button.scss';

export default function ToggleButton(props) {
  const { onClick, opened } = props;

  return (
    <button
      className="toggle-button grey-button"
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {opened ? 'close' : 'open'}
    </button>
  );
}

ToggleButton.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
