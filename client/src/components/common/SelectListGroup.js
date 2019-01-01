import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
  formBasicClass
}) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div className='form-group'>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={!error ? formBasicClass : `${formBasicClass} is-invalid`} // is-invalid is bootstrap class for validation this.props.errors
      >
        {selectOptions}
      </select>
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
