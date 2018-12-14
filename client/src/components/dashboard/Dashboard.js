import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class Dashboard extends Component {
  componentDidMount(){
    this.props.getCurrentProfile();
  }
  
  render() {
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;
    
    let dashboardContent;
    
    if (profile === null || loading ) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent = <h1>Hello</h1>;
    }
    
    return (
      <div className="dashboard">
        <div className="container">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
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
  auth: state.auth,
})
export default connect(mapSateToProps, {getCurrentProfile})(Dashboard);