import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';

class Dashboard extends Component {
  componentDidMount(){
    this.props.getCurrentProfile();
  }
  
  render() {
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;
    
    let dashboardContent;
    
    if (profile === null || loading ) {
      
    } else {
      
    }
    
    console.log('user :', user, 'profiel', profile, 'loading', loading);
    return (
      <div>
        <h1>Dashboard</h1>
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
  auth: state.auth,
})
export default connect(mapSateToProps, {getCurrentProfile})(Dashboard);