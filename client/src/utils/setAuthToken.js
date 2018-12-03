import axios from 'axios';

const setAuthToken = token => {
  if(token) {
    // Apply to every request
    axios.default.headers.common['Autherization'] = token;
  } else {
    // Delete auth header
    delete axios.default.headers.common['Autherization'];
  }
}

export default setAuthToken;