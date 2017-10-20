/**
 * File    : surveyTemplate.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 20/10/2017
 */
const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
      
        <title>FeedColla - Help us to become better!</title>  
      </head>
        <body>
            <div style="text-align: center;">
                <h3>We'd like your input!</h3>
                <p>Please answer the following question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                </div>
            </div>
        </body>
    </html>
    `;
};