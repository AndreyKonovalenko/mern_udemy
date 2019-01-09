import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGitHub from './ProfileGitHub';
//import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
    console.log(typeof this.props.match.params.handle);
  }
  render() {
    const { profile } = this.props.profile;
    console.log(profile);
    return (
      <div>
        <ProfileHeader />
        {profile ? <h1>{profile.user.name}</h1> : null}
        <ProfileAbout />
        <ProfileCreds />
        <ProfileGitHub />
      </div>
    );
  }
}

Profile.propTyeps = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
