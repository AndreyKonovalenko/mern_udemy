import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('submit');
  };

  render() {
    const { errors } = this.state;
    return (
      <div className='create-profile'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Create Your Profile</h1>
              <p className='lead text-center'>
                Let's get some information to make your profile stand out
              </p>
              <small className='d-block pb-3'>* - required fielsd</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder='* Profile Handle'
                  nama={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info='A unique handle for you profile URL. Your full name, company name,
                  nickname'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequierd,
  errors: PropTypes.object.isRequierd
};

const mapSateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapSateToProps)(CreateProfile);
