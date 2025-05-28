import { useReducer } from 'react';

const INITIAL_FORM = {
  name: '',
  text: '',
  rating: 0,
};

const SET_NAME_ACTION = 'SET_NAME';
const SET_TEXT_ACTION = 'SET_TEXT';
const INCREMENT_RATING_ACTION = 'INCREMENT_RATING_ACTION';
const DECREMENT_RATING_ACTION = 'DECREMENT_RATING_ACTION';
const CLEAR_FORM_ACTION = 'CLEAR_FORM';

const formReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME_ACTION:
      return { ...state, name: action.payload };
    case SET_TEXT_ACTION:
      return { ...state, text: action.payload };
    case INCREMENT_RATING_ACTION:
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case DECREMENT_RATING_ACTION:
      return { ...state, rating: Math.max(state.rating - 1, 0) };
    case CLEAR_FORM_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(formReducer, INITIAL_FORM);

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const incrementRating = () => {
    dispatch({ type: INCREMENT_RATING_ACTION });
  };
  const decrementRating = () => {
    dispatch({ type: DECREMENT_RATING_ACTION });
  };
  const clearForm = () => {
    dispatch({ type: CLEAR_FORM_ACTION });
  };

  return {
    setName,
    setText,
    clearForm,
    incrementRating,
    decrementRating,
    form,
  };
};
