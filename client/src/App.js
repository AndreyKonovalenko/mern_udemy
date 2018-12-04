import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { Provider } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import store from './store';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info ad expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <div className='container'>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
