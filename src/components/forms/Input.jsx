import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function Input({id, label, error, ...props}) {
  return (
      <div className="control no-margin">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} />
        <div className="control-error">
          {id === "email" && error && <p><FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />Please enter correct email id</p>}
          {id === "password" && error && <p><FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />Please enter correct password</p>}
        </div>
    </div>
  );
}
