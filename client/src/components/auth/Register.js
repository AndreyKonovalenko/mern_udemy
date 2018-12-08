import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
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

    this.props.registerUser(newUser, this.props.history);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
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
                    className={
                      !this.props.errors.name
                        ? formBasicClass
                        : `${formBasicClass} is-invalid`
                    } // is-invalid is bootstrap class for validation this.props.errors
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                  />
                  {this.props.errors.name && (
                    <div className='invalid-feedback'>
                      {this.props.errors.name}
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className={
                      !this.props.errors.email
                        ? formBasicClass
                        : `${formBasicClass} is-invalid`
                    }
                    placeholder='Email Address'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChangeHandler}
                  />
                  {this.props.errors.email && (
                    <div className='invalid-feedback'>
                      {this.props.errors.email}
                    </div>
                  )}
                  <small className='form-text text-muted'>
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={
                      !this.props.errors.password
                        ? formBasicClass
                        : `${formBasicClass} is-invalid`
                    }
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChangeHandler}
                  />
                  {this.props.errors.password && (
                    <div className='invalid-feedback'>
                      {this.props.errors.password}
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={
                      !this.props.errors.password2
                        ? formBasicClass
                        : `${formBasicClass} is-invalid`
                    }
                    placeholder='Confirm Password'
                    name='password2'
                    value={this.state.password2}
                    onChange={this.onChangeHandler}
                  />
                  {this.props.errors.password2 && (
                    <div className='invalid-feedback'>
                      {this.props.errors.password2}
                    </div>
                  )}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapSateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapSateToProps,
  { registerUser }
)(withRouter(Register));
