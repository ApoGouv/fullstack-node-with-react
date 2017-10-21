/**
 * File    : validateEmails.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 21/10/2017
 */
import _ from 'lodash';
// regex for emails by http://emailregex.com/
// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  let invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  // remove any falsy values: 0, false, null, ""
  invalidEmails = _.compact(invalidEmails);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
