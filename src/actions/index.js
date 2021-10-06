import { SIGN_OUT, SIGN_IN } from "./types";
import Streams from "../apis/Streams";
import { formValues } from "redux-form";
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
export const createStream = (formValues) => async (dispatch) => {
  Streams.post("/streams", formValues);
};
