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
  constructor(props) {
    super(props);

    this.state = {
      register: true,
      login: false,
      next: false,
      user: undefined,
    };

    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleLogin() {
    this.setState({
      register: false,
      login: true,
    });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      register: true,
      login: false,
    });
  }

  handleComment(value) {
    this.setState({
      user: value,
      login: false,
      next: true,
    });
  }

  render() {
    // console.log(this.state.user);
    return (
      <React.Fragment>
        {this.state.register ? <FormRegister
          handleLogin={this.handleLogin}
        /> : null}
        {this.state.login ? <FormLogin
          handleRegister={this.handleRegister}
          handleComment={this.handleComment}
        /> : null}
        {this.state.next ? <Comment /> : null}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
