const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Model
const Profile = require('../../models/Profile');

// Load User Model
const User = require('../../models/User');

// @router GET api/profile/test
// @decx   Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @router GET api/profile
// @decx   GET current users profile
// @access Privet
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for thes user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @router POST api/profile
// @decx   Create or Edit user profile
// @access Privet
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.compony) profileFields.compony = req.body.compony;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.ststus) profileFields.ststus = req.body.ststus;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    // Skills - Split into array
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skils.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facbook = req.body.facbook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exisits
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profile).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
