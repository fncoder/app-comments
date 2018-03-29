import React from 'react';

const FormInputs = () => (
  <React.Fragment>
    <label htmlFor="nickname" className="label-text label">
      Nickname
      <input id="nickname" className="label-nickname__input input" type="text" placeholder="Nickname" />
    </label>
    <label htmlFor="password" className="label-password label">
      Password
      <input id="password" className="label-password__input input" type="text" placeholder="Password" />
    </label>
  </React.Fragment>
);

export default FormInputs;
