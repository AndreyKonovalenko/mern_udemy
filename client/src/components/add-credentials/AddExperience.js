import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import TextFieldGroup from '../common/TextFieldGroup';
//import TextAriaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddExperience extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    discription: '',
    dissabled: false
  };
  render() {
    return (
      <div className='add-experince'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <Link to='/dashboard' className='btn btn-light'>
                Go Back
              </Link>
              <h1 className='display-4 text-center'>Add Experince</h1>
              <p className='lead text-center'>
                Add any job or position that you hava had in the pust or current
              </p>
              <small className='d-block pb-3'>* = required fields </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(AddExperience));
