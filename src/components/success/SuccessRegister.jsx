import React from 'react';

class SuccessRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hidden: 'message-hidden',
      });
    }, 3000);
  }

  render() {
    return (
      <div className={`message ${this.state.hidden ? this.state.hidden : ''}`}>
        <p className="message__text">Your account has been registered successfully.</p>
      </div>
    );
  }
}


export default SuccessRegister;
