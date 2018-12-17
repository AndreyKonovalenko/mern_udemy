import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>TODO DISPLAY PROFILE</h4>;
      } else {
        // User is logged in but has no profiel
        dashboardContent = (
          <div>
            <p className='lead text-muted'>Welcom {user.name} </p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn-lg btn-info'>
              {' '}
              Create profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className='dashboard'>
        <div className='container'>
          <div className='col-md-12'>
            <h1 className='display-4'>Dashboard</h1>
            {dashboardContent}
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propsTypes = {
  getCurrentProfile: PropTypes.func.isRequierd,
  auth: PropTypes.object.isRequierd,
  profile: PropTypes.object.isRequierd
};
const mapSateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapSateToProps,
  { getCurrentProfile }
)(Dashboard);
