import * as types from './actionTypes';

export function setCurrentEmail(email) {
  return {
    type: types.SET_CURRENT_EMAIL,
    payload: email
  };
}
