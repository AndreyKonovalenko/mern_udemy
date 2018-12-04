import axios from 'axios';

//const url = 'http://localhost:5000'; // this is for local development
//const url = 'http://mern-bereon.c9users.io:8081'; // this is for C9 IDE development
console.log(process.env.REACT_APP_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL
  
});

export default instance;
