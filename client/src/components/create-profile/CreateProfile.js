import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
//import InputGroup from '../common/InputGroup';

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

  onSubmitHandler = event => {
    event.preventDefault();
    console.log('submit');
  };
  
  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const { errors } = this.state;
    
    // Select options for status
    const options = [
      { label: '* Select Professipnal Status ', value: 0},
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Insctuctor or Teacher', value: 'Insctuctor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Othen'}
    ];
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
              <form onSubmit={this.onSubmitHandler}>
                <TextFieldGroup
                  placeholder='* Profile Handle'
                  value={this.state.handle}
                  nama={this.state.handle}
                  onChange={this.onChangeHandler}
                  error={errors.handle}
                  info='A unique handle for you profile URL. Your full name, company name,
                  nickname'
                />
                <SelectListGroup
                  placeholder='Status'
                  value={this.state.status}
                  nama='status'
                  onChange={this.onChangeHandler}
                  options={options}
                  error={errors.status}
                  info='Give us an idea where you are at in your career'
                />
                <TextFieldGroup
                  placeholder='Company'
                  name='company'
                  value={this.state.company}
                  onChange={this.onChangeHandler}
                  error={errors.company}
                  info='Gould be your own company or one you work for'
                />
                <TextFieldGroup
                  placeholder='Website'
                  name='website'
                  value={this.state.website}
                  onChange={this.onChangeHandler}
                  error={errors.website}
                  info='Could be your own website or a company one'
                />
                <TextFieldGroup
                  placeholder='Location'
                  name='location'
                  value={this.state.location}
                  onChange={this.onChangeHandler}
                  error={errors.location}
                  info='City or city & state suggested (eg. Boston, MA)'
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
