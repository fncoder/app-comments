import React from 'react';
import FormButtons from './FormButtons.jsx';
import FormInputs from './FormInputs.jsx';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      logs: [],
      login: '',
    };

    this.handleNext = this.handleNext.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  handleNext(e) {
    e.preventDefault();
    const url = 'http://localhost:3001/login';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        users: this.props.users,
        loginStatus: true,
      }),
    }).then(res => res.json()).then((res) => {
      if (res.status === 'login') {
        this.setState({
          login: res,
          keyword: false,
        }, () => {
          this.props.handleComment(this.state.login);
        });
      } else {
        this.setState({
          logs: [...this.state.logs, res],
          keyword: true,
        });
      }
    });
  }

  onChangeFetch() {
    const url = 'http://localhost:3001/login';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
      }),
    }).then(res => res.json()).then((res) => {
      this.setState({
        logs: [...this.state.logs, res],
      });
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    }, () => {
      if (this.state.keyword) {
        this.onChangeFetch();
      }
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    }, () => {
      if (this.state.keyword) {
        this.onChangeFetch();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="form">
          <div className="wrapper-form">
            <form className="form-submit" onSubmit={this.handleNext}>
              <p className="form-text">Sign In</p>
              <FormInputs
                logs={this.state.logs}
                onChangeName={this.onChangeName}
                onChangePassword={this.onChangePassword}
              />
              <p className="text-account">You don't have an account yet? <a className="text-click" onClick={this.props.handleRegister} href="#">Click here</a></p>
              <FormButtons />
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}


export default FormLogin;
