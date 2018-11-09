const Validator = require("validator");
const isEmpty = require("./is-empty");


module.exports = function validateRegisterInput(data) {
  let errors = {};
  
  if(!Validator.isLength(data.name, { min: 2, max: 30})) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // if everything passes errors object will be empty and in the end
  // functon will return isValid: true
  return {
    errors, // same as errors: errors
    isValid: isEmpty(errors)
  };
};