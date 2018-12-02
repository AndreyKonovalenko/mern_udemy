import axios from '../axios-db';
import { GET_ERRORS } from './types';

// Register User
export const registerUser = (userDate, history) => dispatch => {
  axios
    .post('api/users/register', userDate)
    .then(response => history.push('/login'))
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    );
};
