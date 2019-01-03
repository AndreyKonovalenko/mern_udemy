import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  state = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
    disabled: false
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const educationData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    };
    this.props.addEducation(educationData, this.props.history);
  };
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onCheckHandler = event => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const formBasicClass = 'form-control form-control-lg';
    return (
      <div className='add-education'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <Link to='/dashboard' className='btn btn-light'>
                Go Back
              </Link>
              <h1 className='display-4 text-center'>Add Education</h1>
              <p className='lead text-center'>
                Add any school, bootcamp, etc that you have attended
              </p>
              <small className='d-block pb-3'>* = required fields </small>
              <form onSubmit={this.onSubmitHandler}>
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='* School'
                  name='school'
                  value={this.state.school}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.school}
                />
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='* Degree or Certification'
                  name='degree'
                  value={this.state.degree}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.degree}
                />
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='* Field of Study'
                  name='fieldofstudy'
                  value={this.state.fieldofstudy}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.fieldofstudy}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  name='from'
                  type='date'
                  value={this.state.from}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  name='to'
                  type='date'
                  value={this.state.to}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className='from-check mb-4'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    name='current'
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheckHandler}
                    id='current'
                  />
                  <label htmlFor='current' className='form-check-label'>
                    Current Education
                  </label>
                </div>
                <TextAreaFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='Program Description'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.description}
                  info='Tell us about the program that you were or are in'
                />
                <input
                  type='submit'
                  value='Submit'
                  className='btn btn-info btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
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
  { addEducation }
)(withRouter(AddEducation));
