import axios from '../axios-db';

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Autherization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Autherization'];
  }
};

export default setAuthToken;
