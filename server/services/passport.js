/**
 * File    : passport.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 14/10/2017
 */
/**
 * passport.use(): is like a generic register
 *                 we use it to tell/inform passport to use a new Strategy
 * new GoogleStrategy(): create a new GoogleStrategy instance
 * clientID and clientSecret: are our credentials from google to OAuth client
 * callbackURL: is the route path, the user will be sent to, after they grant permissions to our application
 */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

// Create a Model Class by fetching the 'users' collection
// -quick reminder: A model class is used to access a single collection sitting inside of MongoDB
//                  and we will use this Model Class to make model instances which will represent our DB records
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // create a user Model Instance and save() it to the DB
      new User({
        googleId: profile.id
      }).save();
    }
  )
);
