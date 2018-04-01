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
import Comment from './components/comment/Comment.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      login: false,
      users: [],
    };

    this.handleRegister = this.handleLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  handleLogin() {
    this.setState(prevState => ({
      login: !prevState.login,
    }));
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState(prevState => ({
      login: !prevState.login,
    }));
  }

  getUsers(value) {
    this.setState({
      users: [...this.state.users, value[value.length - 1]],
    });
    { this.state.login ?
      <FormLogin users={this.state.users} handleRegister={this.handleRegister} /> :
      <FormRegister users={this.getUsers} handleLogin={this.handleLogin} />; }
  }

  render() {
    return (
      <React.Fragment>

        <Comment />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
