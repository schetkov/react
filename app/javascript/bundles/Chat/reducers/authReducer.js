import { combineReducers } from 'redux';
import { SIGN_UP, LOG_IN } from '../constants/authConstants';

const authReducer = (state = '', action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state
      }
    case LOG_IN:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default authReducer;
