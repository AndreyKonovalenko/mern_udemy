import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    test: false,
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
    instagram: ''
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { displaySocialInputs } = this.state;
    const formBasicClass = 'form-control form-control-lg';

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            formBasicClass={formBasicClass}
            placeholder='Twitter profile URL'
            name='twitter'
            icon='fab fa-twitter'
            value={this.state.twitter}
            onChange={this.onChangeHandler}
            error={this.props.errors.twitter}
          />
          <InputGroup
            formBasicClass={formBasicClass}
            placeholder='Facebook Page URL'
            name='facebook'
            icon='fab fa-facebook'
            value={this.state.facebook}
            onChange={this.onChangeHandler}
            error={this.props.errors.facebook}
          />
          <InputGroup
            formBasicClass={formBasicClass}
            placeholder='Linkedin Profile URL'
            name='linkedin'
            icon='fab fa-linkedin'
            value={this.state.linkedin}
            onChange={this.onChangeHandler}
            error={this.props.errors.linkedin}
          />
          <InputGroup
            formBasicClass={formBasicClass}
            placeholder='YouTude Channal URL'
            name='youtube'
            icon='fab fa-youtube'
            value={this.state.youtube}
            onChange={this.onChangeHandler}
            error={this.props.errors.youtube}
          />
          <InputGroup
            formBasicClass={formBasicClass}
            placeholder='Instagram Page URL'
            name='instagram'
            icon='fab fa-instagram'
            value={this.state.instagram}
            onChange={this.onChangeHandler}
            error={this.props.errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select Professipnal Status ', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Insctuctor or Teacher', value: 'Insctuctor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Othen' }
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
                  name='handle'
                  value={this.state.handle}
                  onChange={this.onChangeHandler}
                  formBasicClass={formBasicClass}
                  error={this.props.errors.handle}
                  info='A unique handle for you profile URL. Your full name, company name,
                  nickname'
                />
                <SelectListGroup
                  placeholder='Status'
                  value={this.state.status}
                  name='status'
                  formBasicClass={formBasicClass}
                  onChange={this.onChangeHandler}
                  options={options}
                  error={this.props.errors.status}
                  info='Give us an idea where you are at in your career'
                />
                <TextFieldGroup
                  placeholder='Company'
                  name='company'
                  formBasicClass={formBasicClass}
                  value={this.state.company}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.company}
                  info='Gould be your own company or one you work for'
                />
                <TextFieldGroup
                  placeholder='Website'
                  name='website'
                  formBasicClass={formBasicClass}
                  value={this.state.website}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.website}
                  info='Could be your own website or a company one'
                />
                <TextFieldGroup
                  placeholder='Location'
                  name='location'
                  formBasicClass={formBasicClass}
                  value={this.state.location}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.location}
                  info='City or city & state suggested (eg. Boston, MA)'
                />
                <TextFieldGroup
                  placeholder='* Skills'
                  name='skills'
                  formBasicClass={formBasicClass}
                  value={this.state.skills}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.skills}
                  info='Please use comma separated values (eg.
                  HTML, CSS, JavaScript, PHP)'
                />
                <TextFieldGroup
                  placeholder='Github Username'
                  name='githubusername'
                  formBasicClass={formBasicClass}
                  value={this.state.githubusername}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.githubusername}
                  info='If you want your latest repos and a Github link,
                  include your username'
                />
                <TextAreaFieldGroup
                  placeholder='Short Bio'
                  name='bio'
                  formBasicClass={formBasicClass}
                  value={this.state.bio}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.bio}
                  info='Tell us o little about yourself'
                />

                <div className='nb-3'>
                  <button
                    type='button'
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className='btn btn-light'
                  >
                    Add Social Network Links
                  </button>
                  <span className='text-muted'>Optinal</span>
                </div>
                {socialInputs}
                <input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapSateToProps = state => {
  return {
    errors: state.errors
  };
};

export default connect(
  mapSateToProps,
  { createProfile }
)(withRouter(CreateProfile));
