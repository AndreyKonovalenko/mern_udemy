import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class EditProfile extends Component {
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

  componentDidMount() {
    this.props.getCurrentProfile();

    if (this.props.profile.profile) {
      const profile = this.props.profile.profile;
      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(',');
      // IF  profile field doesn't exist, make empty string
      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
      profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
      profile.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
      profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
      profile.status = !isEmpty(profile.status) ? profile.status : '';
      profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        skills: skillsCSV,
        status: profile.status,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        instagram: profile.instagram,
        youtube: profile.youtube
      });
    }
  }

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
              <h1 className='display-4 text-center'>Edit Profile</h1>
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

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapSateToProps = state => {
  return {
    errors: state.errors,
    profile: state.profile
  };
};

export default connect(
  mapSateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
