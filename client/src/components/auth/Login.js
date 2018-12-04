import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  // this lifecycle method here in order not to change input logic below
  // but instead we can remove errors component state and user this.props.erros
  // form our store

  componentDidUpdate(prevProps) {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHundler = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    const formBasicClass = 'form-control form-control-lg';

    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmitHundler}>
                <div className='form-group'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChangeHandler}
                    className={
                      !errors.email
                        ? formBasicClass
                        : `${formBasicClass} is-invalid`
                    } // is-invalid is bootstrap class for validation errors
                  />
                  {errors.email && (
                    <div className='invalid-feedback'>{errors.email}</div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChangeHandler}
                    className={
                      !errors.password
                        ? formBasicClass
                        : `${formBasicClass} is-invalid`
                    } // is-invalid is bootstrap class for validation errors
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
