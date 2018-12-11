import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

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
                <TextFieldGroup 
                  placeholder='Name'
                  name='name'
                  formBasicClass={formBasicClass}
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.name}
                />
                <TextFieldGroup 
                  placeholder='Email Address'
                  name='email'
                  formBasicClass={formBasicClass}
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                  type='email'
                  error={this.props.errors.email}
                  info=' This site uses Gravatar so if you want a profile image, use a Gravatar email'
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
                <TextFieldGroup 
                  placeholder='Confirm Password'
                  name='password'
                  formBasicClass={formBasicClass}
                  value={this.state.password2}
                  onChange={this.onChangeHandler}
                  type='password'
                  error={this.props.errors.password2}
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
