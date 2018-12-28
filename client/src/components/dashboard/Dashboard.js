import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions.js';

class Dashboard extends Component {
  componentDidMount() {
    this.props.onGetCurrentProfile();
  }

  onDeleteClickHandle = event => {
//    event.preventDefault();
    this.props.onDeleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className='lead text-muted'>
              Welcom <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            {/* TODO: exp and edu  */}
            <div style={{ marginBottom: '60px' }} />
            <button onClick={this.onDeleteClickHandle} className='btn btn-danger'>
              Delete My Account
            </button>
          </div>
        );
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
  profile: PropTypes.object.isRequierd,
  deleteAccount: PropTypes.func.isRequired
};
const mapSateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentProfile: () => dispatch(getCurrentProfile()),
    onDeleteAccount: () => dispatch(deleteAccount())
  }
}

export default connect(
  mapSateToProps, mapDispatchToProps
)(Dashboard);
