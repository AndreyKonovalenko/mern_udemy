import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHundler = event => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    
    const url = 'http://mern-bereon.c9users.io:8081/api/users/register';
    axios.post(url, newUser)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        this.setState({errors: error.response.data});
      });
    
  };
  
  
  render() {
    
        
    const {errors} = this.state; //this is the same as const erorrs = this.staste.errors
    const formBasicClass = 'form-control form-control-lg';
    
    return (
  
      <div className='register'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Sign Up</h1>
              <p className='lead text-center'>
                Create your DevConnector account
              </p>
              <form onSubmit={this.onSubmitHundler}>
                <div className='form-group'>
                  <input
                    type='text'
                    className= {!errors.name ? formBasicClass : `${formBasicClass} is-invalid` } // is-invalid is bootstrap class for validation errors
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                  />
                  {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className= {!errors.email ? formBasicClass : `${formBasicClass} is-invalid`}
                    placeholder='Email Address'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChangeHandler}
                  />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  <small className='form-text text-muted'>
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={!errors.password ? formBasicClass : `${formBasicClass} is-invalid`}
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChangeHandler}
                  />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={!errors.password2 ? formBasicClass : `${formBasicClass} is-invalid`}
                    placeholder='Confirm Password'
                    name='password2'
                    value={this.state.password2}
                    onChange={this.onChangeHandler}
                  />
                  {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
