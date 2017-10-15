/**
 * File    : authRoutes.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 14/10/2017
 */
const passport = require('passport');

module.exports = (app) => {
  /**
   * When a user comes to the http://localhost:5000/auth/google
   * we want to kick them into our OAuth flow which is being entirely managed by passport.
   * So we are saying: Hey passport, attempt to authenticate the user who is coming to this
   * route and use the strategy called 'google'.
   * The second argument we pass is an object, with a 'scope' property.
   * scope: specifies to google what access we want to have inside of this user's profile.
   */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  /**
   * We have the 'code'. so call passport with 'google' strategy to
   * handle the last request exchange with google servers
   */
  app.get('/auth/google/callback', passport.authenticate('google'));

  /**
   * route: GET /api/current_user
   * req: incoming Request
   * res: outgoing Response
   */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
