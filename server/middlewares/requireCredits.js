/**
 * File    : requireCredits.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 20/10/2017
 */
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  // user has enough credits
  next();
};
