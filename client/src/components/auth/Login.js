import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  // this lifecycle method here in order not to change input logic below
  // but instead we can remove errors component state and user this.props.erros
  // form our store
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHundler = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const formBasicClass = 'form-control form-control-lg';
    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>Sign in to your DevConnector account</p>
              <form onSubmit={this.onSubmitHundler}>
                <TextFieldGroup
                  placeholder='Email Address'
                  name='email'
                  formBasicClass={formBasicClass}
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                  type='email'
                  error={this.props.errors.email}
                />
                <TextFieldGroup
                  placeholder='Password'
                  name='password'
                  formBasicClass={formBasicClass}
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                  type='password'
                  error={this.props.errors.password}
                />
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
