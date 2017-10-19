/**
 * File    : requireLogin.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 19/10/2017
 */
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  // there is a logged in user
  next();
};
