import axios from 'axios';


// Production on Heroku

let url = 'https://udemy-mern-devconnector.herokuapp.com/';  

// Development Mode 
//const url = 'http://localhost:5000'; // this is for local development
//const url = 'http://mern-bereon.c9users.io:8081'; // this is for C9 IDE development

if (process.env.REACT_APP_URL) {
  console.log(process.env.REACT_APP_URL);
  if (process.env.REACT_APP_URL === 'http://mern-bereon.c9users.io:8081') {
      url = process.env.REACT_APP_URL;
  } else {
    url = 'http://localhost:5000';
  }
}

const instance = axios.create({
  baseURL: url
  
});

export default instance;
