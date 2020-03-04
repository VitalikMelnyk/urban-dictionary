import axios from "axios";
import {
  SET_INPUT_WORD,
  SET_CARD_DESCRIPTION,
  SET_IS_ADDITIONAL_CONTENT,
  FETCH_DATA
} from "./actionTypes";
import { URL_API, URBAN_KEY } from "../shared/constants";

export const setInputWord = payload => ({
  type: SET_INPUT_WORD,
  payload
});

export const setCardDescription = payload => ({
  type: SET_CARD_DESCRIPTION,
  payload
});

export const setIsAdditionalContent = payload => ({
  type: SET_IS_ADDITIONAL_CONTENT,
  payload
});

export const actionCreator = (type, action, dispatch) => {
  dispatch({ type: `${type}_PENDING` });
  action
    .then(res => {
      const data = res.data;
      dispatch({ type: `${type}_SUCCESS`, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: `${type}_ERROR`, payload: err });
    });
};

export const fetchData = inputWord => {
  const action = axios.get(`${URL_API}/define?term=${inputWord}`, URBAN_KEY);
  return dispatch => actionCreator(FETCH_DATA, action, dispatch);
};
