import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGitHub from './ProfileGitHub';
import Spinner from '../common/Spinner';
//import {getProfileByHandle} from '../actions/ProfileActions';


class Profile extends Component {
  
  componentDidMount() {
    // if(this.props.match.params.handle) {
    //   this.props.getProfileByHandle(this.props.match.params.handle);
    // }
    console.log(this.props.match.params);
  }
  render(){
    
    return (
    <div>
      <ProfileHeader />
      <ProfileAbout />
      <ProfileCreds />
      <ProfileGitHub />
    </div>
    );
  }
}

Profile.propTyeps = {
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  profile: state.profile
}

export default connect(mapStateToProps)(Profile);