import React from 'react';

const FormInputs = (props) => {
  let validate = '';

  if (props.logs) {
    validate = props.logs[props.logs.length - 1];
  }
  return (
    <React.Fragment>
      <label htmlFor="nickname" className="label-text label">
          Nickname
        <input id="nickname" onChange={props.onChangeName} className="label-nickname__input input" type="text" name="nickname" placeholder="Nickname" />
        <p className="validate-msg">{validate && validate.name || validate && validate.busy || validate && validate.fields ? validate.message : ''}</p>
      </label>
      <label htmlFor="password" className="label-password label">
          Password
        <input id="password" onChange={props.onChangePassword} className="label-password__input input" type="password" name="password" placeholder="Password" />
        <p className="validate-msg">{validate && validate.password || validate && validate.fields ? validate.message : ''}</p>
      </label>
      <label htmlFor="repeat-password" className="label-password label">
        <input id="repeat-password" onChange={props.onChangeRepeat} className="label-password__input input" type="password" name="repeat-password" placeholder="Repeat password" />
        <p className="validate-msg">{validate && validate.password || validate && validate.fields ? validate.message : ''}</p>
      </label>
    </React.Fragment>
  );
};


export default FormInputs;
