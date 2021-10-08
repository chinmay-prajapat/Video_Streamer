import history from "../history";
import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import Streams from "../apis/Streams";
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await Streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: res.data });
  history.push("/");
};
export const fetchStreams = () => async (dispatch) => {
  const res = await Streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const res = await Streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};
export const editStream = (id, formValues) => async (dispatch) => {
  const res = await Streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push("/");
};
export const deleteStream = (id) => async (dispatch) => {
  await Streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
