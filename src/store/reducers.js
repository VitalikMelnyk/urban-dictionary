import {
  SET_INPUT_WORD,
  SET_CARD_DESCRIPTION,
  SET_IS_ADDITIONAL_CONTENT,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "./actionTypes";

const initialState = {
  wordCards: [],
  inputWord: "",
  isAdditionalContent: false,
  isLoading: false,
  cardDescription: {},
  error: null
};

export const rootReducer = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case SET_INPUT_WORD:
      return { ...state, inputWord: payload };
    case SET_CARD_DESCRIPTION:
      return { ...state, cardDescription: payload };
    case SET_IS_ADDITIONAL_CONTENT:
      return { ...state, isAdditionalContent: payload };
    case FETCH_DATA_PENDING:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, wordCards: payload.list };
    case FETCH_DATA_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
