const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


// Load User model
const User = require('../../models/User');

// @route GET api/users/test
// @decx   Tests users route
// @access Public

router.get('/test', (req, res) => res.json({msg: "Users Works"}));

// @route GET api/users/register
// @decx   Tests users route
// @access Public

// "new" we use when create new User in mongoose

router.post('/register', (req, res) => {
   User.findOne({ email: req.body.email })
    .then(user => {
        if(user) {
            return res.status(400).json({email: 'Email already exists'});
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '200', // Size
                r: 'pg', // Rating,
                d: 'mm' // Default
            });
            
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save() // .save() is mongoose method
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


// @route GET api/users/login
// @decx Login user / Returning JWT Token
// @access Public

router.post('/login', (req, res) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    
    //Fide user by email
    // for this we gona user mongoose User module
    
    //User.findOne({email: email}) it is equal User.findOne({email})
    User.findOne({ email }).then(user => {
        // Check for user
        if(!user) {
            return res.status(400).json({email:'User not found'});
        }
        
        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                // User Matched
                
                const payload = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar
                }; // Create JWT Payload
                
                // Sign Token
                jwt.sign(
                    payload, 
                    keys.secretOrKey, 
                    { expiresIn: 3600 }, 
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        })
                });
            } else {
                return res.status(400).json({password: 'Password incorrect'});
            }
        });
    });
    
});

// @route GET api/users/current
// @decx   Return cuurent user
// @access Privet

router.get('/current', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        });
    }
);

module.exports = router;
