import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  icon,
  type,
  formBasicClass
}) => {
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text'>
          <i className={icon} />
        </span>
      </div>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={!error ? formBasicClass : `${formBasicClass} is-invalid`} // is-invalid is bootstrap class for validation this.props.errors
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
