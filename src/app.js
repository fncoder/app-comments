import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './scss/global.scss';
import RenderHTML from './index.html';
import FormRegister from './components/form-register/FormRegister.jsx';
import FormRegisterButtons from './components/form-register/FormButtons.jsx';
import FormRegisterInputs from './components/form-register/FormInputs.jsx';
import FormLogin from './components/form-login/FormLogin.jsx';
import FormLoginButtons from './components/form-login/FormButtons.jsx';
import FormLoginInputs from './components/form-login/FormInputs.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <FormRegister />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
