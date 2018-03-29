import React from 'react';
import FormButtons from './FormButtons.jsx';
import FormInputs from './FormInputs.jsx';
import SuccessRegister from '../success/SuccessRegister.jsx';

class FormRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      repeatPassword: '',
      message: undefined,
      users: [],
      logs: [],
      status: false,
      keyword: false,
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRepeat = this.onChangeRepeat.bind(this);
    this.onChangeFetch = this.onChangeFetch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:3001/register';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        repeatPassword: this.state.repeatPassword,
        registerStatus: true,
      }),
    }).then(res => res.json()).then((res) => {
      if (res.status === 'register') {
        this.setState({
          users: [...this.state.users, res],
          status: true,
          keyword: false,
        });
      } else {
        this.setState({
          logs: [...this.state.logs, res],
          status: false,
          keyword: true,
        });
      }
    });
  }

  onChangeFetch() {
    const url = 'http://localhost:3001/register';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        repeatPassword: this.state.repeatPassword,
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

  onChangeRepeat(e) {
    this.setState({
      repeatPassword: e.target.value,
    }, () => {
      if (this.state.keyword) {
        this.onChangeFetch();
      }
    });
  }

  render() {
    console.log(this.state.users);
    if (this.state.status) {
      setTimeout(() => {
        this.setState({
          status: false,
        });
      }, 3500);
    }

    return (
      <React.Fragment>
        <section className="form-register">
          <div className="wrapper-form">
            <form className="form" onSubmit={this.handleSubmit}>
          Sign Up
              <FormInputs
                logs={this.state.logs}
                onChangeName={this.onChangeName}
                onChangePassword={this.onChangePassword}
                onChangeRepeat={this.onChangeRepeat}
              />
              <FormButtons ontest={this.onTest} />
            </form>
          </div>
        </section>
        {this.state.status ? <SuccessRegister /> : false}
      </React.Fragment>
    );
  }
}


export default FormRegister;
