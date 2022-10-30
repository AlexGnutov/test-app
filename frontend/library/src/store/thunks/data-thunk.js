import protobuf from 'protobufjs';
import { loadDataErr, loadDataOk, loadDataReq } from '../slices/data-slice';
import { loadCurrentErr, loadCurrentOk, loadCurrentReq } from '../slices/view-slice';

import protoConfig from './config.proto';

const HOST = window.location;

export const dataLoadThunk = () => async (dispatch) => {
  dispatch(loadDataReq());

  try {
    const treeData = await fetch(`${HOST}api/json/tree`).then((r) => r.json());
    const namesData = await fetch(`${HOST}api/json/short`).then((r) => r.json());

    if (treeData.status === 'ok' && namesData.status === 'ok') {
      dispatch(loadDataOk({
        data: namesData.data,
        tree: treeData.data,
      }));
    }
  } catch (e) {
    dispatch(loadDataErr());
  }
};

export const loadCurrentThunk = (id) => async (dispatch) => {
  dispatch(loadCurrentReq());

  try {
    const reply = await fetch(`${HOST}api/json/${id}`).then((r) => r.json());
    if (reply.status === 'ok') {
      dispatch(loadCurrentOk(reply.data));
    }
  } catch (e) {
    dispatch(loadCurrentErr());
  }
};

// TEST BAR METHODS TO TEST JSON vs PROTOBUF

export const testLoadPBThunk = () => async () => {
  try {
    const reply = await fetch(`${HOST}api/pb`)
      .then((r) => r.arrayBuffer());

    const root = await protobuf.load(protoConfig);
    const Message = root.lookupType('configpackage.Message');

    console.log('TEST: Comes from protobuf: ');
    console.log(reply);
    console.log(Message.decode(new Uint8Array(reply)));
  } catch (e) {
    console.log(e.message);
  }
};

export const testLoadJSONThunk = () => async () => {
  try {
    const reply = await fetch(`${HOST}api/json`)
      .then((r) => r.json());

    console.log('TEST: Comes as JSON: ');
    console.log(reply);
  } catch (e) {
    console.log(e.message);
  }
};
