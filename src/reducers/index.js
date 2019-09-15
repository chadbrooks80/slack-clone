import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialUserState = {
  currentUser: null,
  isLoading: true
};

const userReducer = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
        isLoading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
