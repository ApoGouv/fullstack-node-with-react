/**
 * File    : User.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 15/10/2017
 */
const mongoose = require('mongoose');
/*
 * const Schema = mongoose.Schema; the below line is identical.
 * we can use destructuring as below, meaning: The mongoose obj has a property called: Schema.
 * Take that property and assign it to a new variable schema.
 */
const { Schema } = mongoose;

/**
 * Define our User schema.
 * - We can add/remove properties to our schema at any time
 * @type {*}
 */
const userSchema = new Schema({
  googleId: String
});

/**
 * Load our userSchema into mongoose, by
 * creating a 'users' collection if it is not already exists
 * and assign it a schema
 */
mongoose.model('users', userSchema);