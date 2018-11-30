import {TEST_DISPATCH} from './types';

// Register User
export const registerUser = (userDate) => {
  return {
    type: TEST_DISPATCH,
    payload: userDate
  };
};