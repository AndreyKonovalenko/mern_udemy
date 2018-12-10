import React from 'react';
import PropTypes from 'prop-types';

const textFieldGroup = ({
  name,
  placeholder,
  value,
  labal,
  error,
  info,
  type,
  onChange,
  disabled,
  formBasicClass
}) => {
  return (
    <div className='form-group'>
      <input
        type={type}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          className={
          !error
          ? formBasicClass
          : `${formBasicClass} is-invalid`
          } // is-invalid is bootstrap class for validation this.props.errors
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (
        <div className='invalid-feedback'>
          {error}
        </div>
      )}
    </div>
    );
};

textFieldGroup.propTypes ={
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.strin,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

textFieldGroup.defaultProps = {
  type: 'text'
};

export default textFieldGroup;