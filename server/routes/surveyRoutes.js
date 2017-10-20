/**
 * File    : surveyRoutes.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 20/10/2017
 */
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// mongoose Model Class
const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  // create a new survey and send a big email
  // But first check if the user is logged in
  // and if it is, check if has enough credits to create a survey
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // create a Survey Model based on the sent values
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Send an email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      // send back the updated user model. This will also update the credits state
      res.send(user);
    } catch (err) {
      // unprocessable entity
      res.status(422).send(err);
    }
  });
};
