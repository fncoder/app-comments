import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  logs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRepeat: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

const FormInputs = (props) => {
  let validate = null;

  if (props.logs) {
    validate = props.logs[props.logs.length - 1];
  }

  return (
    <React.Fragment>
      <label htmlFor="nickname" className="label-text label">
          Nickname
        <input id="nickname" onChange={props.onChangeName} value={props.value.name} className="label-nickname__input input" type="text" name="nickname" placeholder="Nickname" />
        <p className="validate-msg">{(validate && validate.name) || (validate && validate.busy) || (validate && validate.fields) ? validate.message : null}</p>
      </label>
      <label htmlFor="password" className="label-password label">
          Password
        <input id="password" onChange={props.onChangePassword} value={props.value.password} className="label-password__input input" type="password" name="password" placeholder="Password" />
        <p className="validate-msg">{(validate && validate.password) || (validate && validate.fields) ? validate.message : null}</p>
      </label>
      <label htmlFor="repeat-password" className="label-password label">
        <input id="repeat-password" onChange={props.onChangeRepeat} value={props.value.repeatPassword} className="label-password__input input" type="password" name="repeat-password" placeholder="Repeat password" />
        <p className="validate-msg">{(validate && validate.password) || (validate && validate.fields) ? validate.message : null}</p>
      </label>
    </React.Fragment>
  );
};

FormInputs.propTypes = propTypes;

export default FormInputs;
