import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post("/api/users/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const login = (LoginRequest) => async (dispatch) => {
  try {
    const res = await axios.post("api/users/login", LoginRequest);
    //extract token from res.data
    const { token } = res.data;
    //store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    //set our token in header ***
    setJWTToken(token);
    //decode token on react
    const decode = jwt_decode(token);
    //dispatch to oursecurityReducer

    dispatch({
      type: SET_CURRENT_USER,
      payload: decode,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
};
