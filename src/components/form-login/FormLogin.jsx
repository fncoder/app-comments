import React from 'react';
import FormButtons from './FormButtons.jsx';
import FormInputs from './FormInputs.jsx';

class FormLogin extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="form-login">
        <div className="wrapper-form">
          <form id="form-login" className="form">
          Sign In
            <FormInputs />
            <p className="text-account">You don't have an account yet? <a className="text-click" href="/">Click here</a></p>
            <FormButtons />
          </form>
        </div>
      </section>
    );
  }
}


export default FormLogin;
