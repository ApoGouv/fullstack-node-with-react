/**
 * File    : authRoutes.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 14/10/2017
 */
const passport = require('passport');

module.exports = app => {
  /**
   * GET /auth/google
   * we want to kick them into our OAuth flow which is being entirely managed by passport.
   * So we are saying: Hey passport, attempt to authenticate the user who is coming to this
   * route and use the strategy called 'google'.
   * The second argument we pass is an object, with a 'scope' property.
   * scope: specifies to google what access we want to have inside of this user's profile.
   * - full list for google scope
   * - https://developers.google.com/identity/protocols/googlescopes#adexchangesellerv2.0
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
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/'
    }),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  /**
   * GET /auth/facebook
   * - full list for facebook scope
   * - https://developers.facebook.com/docs/facebook-login/permissions
   */
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );

  /**
   * GET /auth/facebook/callback
   */
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/'
    }),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  /**
   * GET /api/logout
   */
  app.get('/api/logout', (req, res) => {
    // kills the cookie
    req.logout();
    res.redirect('/');
  });

  /**
   * route: GET /api/current_user
   * req: incoming Request
   * res: outgoing Response
   */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
