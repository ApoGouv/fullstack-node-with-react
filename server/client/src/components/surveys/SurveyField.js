/**
 * File    : SurveyField.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 21/10/2017
 */
import React from 'react';

/**
 * <input {...input} />
 * is equal to
 * <input onBlur={input.onBlur} onChange={input.onChange} ... />
 * see console.log(props);
 * @param input: props.input
 * @returns {XML}
 */
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px'}}>
      {touched && error}
      </div>
    </div>
  );
}
