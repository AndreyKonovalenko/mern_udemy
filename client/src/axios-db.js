import axios from 'axios';

const url = 'http://localhost:5000'; // this is for local development
//const url = 'http://mern-bereon.c9users.io:8081'; // this is for C9 IDE development

const instance = axios.create({
  baseURL: url
});

export default instance;
