const { validationResult, check } = require('express-validator');
const exception = require('../../../utils/exception');


// Validation middleware for signup
const validateSignup = [
  // Check if the 'name' field is present and not empty
  check('name').notEmpty().withMessage('Name is required'),

  // Check if the 'email' field is present and is a valid email
  check('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),

  // Check if the 'password' field is present and has a minimum length of 6 characters
  check('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next(exception.validationError());
    }

    // If validation passes, proceed to the next middleware or route
    next();
  }
];

// Validation middleware for signup
const validateLogin = [
    // Check if the 'email' field is present and is a valid email
    check('email')
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email format'),
  
    // Check if the 'password' field is present and has a minimum length of 6 characters
    check('password')
      .notEmpty().withMessage('Password is required')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    
    // Handle validation errors
    (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return next(exception.validationError());//res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];

module.exports = {
    validateSignup,
    validateLogin
}
