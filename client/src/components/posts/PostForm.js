import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  state = {
    text: ''
  };
  onSubmitHundler = event => {
    event.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { errors } = this.props;
    const formBasicClass = 'form-control form-control-lg';
    return (
      <div className='post-form mb-3'>
        <div className='card card-info'>
          <div className='card-header bg-info text-white'>Say Somthing...</div>
          <div className='card-body'>
            <form onSubmit={this.onSubmitHundler}>
              <div className='form-group'>
                <TextAreaFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='Create a post'
                  name='text'
                  value={this.state.text}
                  onChange={this.onChangeHandler}
                  error={errors.text}
                />
              </div>
              <button type='submit' className='btn btn-dark'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
