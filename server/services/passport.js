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

/**
 * user: a user Model Instance (a mongoose model) which we turn it into an id
 */
passport.serializeUser((user, done) => {
  // user.id != user.googleId (==profile.id)
  // user.id is the _id of the record, which is created by the MongoDB
  done(null, user.id);
});

/**
 * id: takes an id, which we will turn it into a mongoose model instance
 */
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // make a query to our DB to see if a user with the same Google ID, already exists.
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record with the given profile ID
          // inform passport that we are finished, without any error (null) and return the found user
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, so make a new record to the DB
          // create a user Model Instance and save() it to the DB
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
