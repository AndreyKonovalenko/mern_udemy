import React from 'react';
import PropTypes from 'prop-types';

const textAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  formBasicClass
}) => {
  return (
    <div className='form-group'>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={!error ? formBasicClass : `${formBasicClass} is-invalid`} // is-invalid is bootstrap class for validation this.props.errors
      />
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

textAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};


export default textAreaFieldGroup;
