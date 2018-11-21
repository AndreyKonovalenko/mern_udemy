const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if(!Validator.isLength(data.text, {min: 10, max: 300})) {
    errors.text = 'Post mast be between 10 and 300 characters';    
  }
  
  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }
  
  //console.log(errors);

  // if everything passes errors object will be empty and in the end
  // functon will return isValid: true
  
  return {
    errors, // same as errors: errors
    isValid: isEmpty(errors)
  };
};
