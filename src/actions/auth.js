import { AUTH, ERROR } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (e) {
    dispatch({ type: ERROR, data: e.response.data.message });
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (e) {
    console.log(e);
  }
};
