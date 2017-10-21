/**
 * File    : SurveyNew.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 21/10/2017
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class ReactNew extends Component {
  /*
  * Create-React-App has a state property to init our state
  constructor(props){
    super(props);

    this.state = { formReview: false };
  }
  */
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="container white-text">
          <div className="row">
            <div className="col l12">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(ReactNew);
