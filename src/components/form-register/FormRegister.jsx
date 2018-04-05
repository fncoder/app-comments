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
          name: '',
          password: '',
          repeatPassword: '',
          status: true,
          keyword: false,
        }, () => {
          if (this.state.status) {
            setTimeout(() => {
              this.setState({
                status: false,
              });
            }, 3500);
          }
        });
      } else {
        this.setState({
          logs: [...this.state.logs, res],
          keyword: true,
        });
      }
    });
  }


  render() {
    return (
      <React.Fragment>
        <section className="form">
          <div className="wrapper-form">
            <form className="form-submit" onSubmit={this.handleSubmit}>
              <p className="form-text">Sign Up</p>
              <FormInputs
                value={this.state}
                logs={this.state.logs}
                onChangeName={this.onChangeName}
                onChangePassword={this.onChangePassword}
                onChangeRepeat={this.onChangeRepeat}
              />
              <FormButtons handleLogin={this.props.handleLogin} />
            </form>
          </div>
        </section>
        {this.state.status ? <SuccessRegister /> : false}
      </React.Fragment>
    );
  }
}


export default FormRegister;
