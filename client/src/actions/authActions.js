import axios from 'axios';
import { GET_ERRORS } from './types';

// Register User
export const registerUser = userDate => dispatch => {
  const url = 'http://mern-bereon.c9users.io:8081/api/users/register';
  axios
    .post(url, userDate)
    .then(response => console.log(response.data))
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    );
};
