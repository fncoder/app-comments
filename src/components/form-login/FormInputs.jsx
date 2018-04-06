import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  logs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

const FormInputs = (props) => {
  let validate = '';

  if (props.logs) {
    validate = props.logs[props.logs.length - 1];
  }

  return (
    <React.Fragment>
      <label htmlFor="nickname" className="label-text label">
        Nickname
        <input id="nickname" onChange={props.onChangeName} className="label-nickname__input input" type="text" placeholder="Nickname" />
        <p className="validate-msg">{(validate && validate.name) || (validate && validate.fields) ? validate.message : null}</p>
      </label>
      <label htmlFor="password" className="label-password label">
        Password
        <input id="password" onChange={props.onChangePassword} className="label-password__input input" type="password" placeholder="Password" />
        <p className="validate-msg">{(validate && validate.password) || (validate && validate.fields) ? validate.message : null}</p>
      </label>
    </React.Fragment>
  );
};

FormInputs.propTypes = propTypes;

export default FormInputs;
