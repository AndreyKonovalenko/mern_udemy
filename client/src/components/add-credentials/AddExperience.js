import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    disabled: false
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const experienceData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    };
    this.props.addExperience(experienceData, this.props.history);
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
              <form onSubmit={this.onSubmitHandler}>
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='* Company'
                  name='company'
                  value={this.state.company}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.company}
                />
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='* Job Title'
                  name='title'
                  value={this.state.title}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.title}
                />
                <TextFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='* Location'
                  name='location'
                  value={this.state.location}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.location}
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
                    Current Job
                  </label>
                </div>
                <TextAreaFieldGroup
                  formBasicClass={formBasicClass}
                  placeholder='Job Description'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChangeHandler}
                  error={this.props.errors.description}
                  info='Tell us about the position'
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
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
  { addExperience }
)(withRouter(AddExperience));
