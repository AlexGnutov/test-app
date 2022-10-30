import React from 'react';
import { useDispatch } from 'react-redux';
import { testLoadJSONThunk, testLoadPBThunk } from '../../store/thunks/data-thunk';

export default function TestBar() {
  const dispatch = useDispatch();

  const loadPB = () => {
    dispatch(testLoadPBThunk());
  };

  const loadJSON = () => {
    dispatch(testLoadJSONThunk());
  };

  return (
    <fieldset>
      <legend>Press button to make test request</legend>
      <button type="button" onClick={loadJSON}>Load JSON via HTTP</button>
      <button type="button" onClick={loadPB}>Load proto buffer via HTTP</button>
    </fieldset>
  );
}
