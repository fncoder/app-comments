import React from 'react';
import PropTypes from 'prop-types';
import CommentButton from './CommentButton.jsx';

const propTypes = {
  user: PropTypes.string.isRequired,
  handlePost: PropTypes.func.isRequired,
};

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: '',
      log: '',
      keyword: false,
    };

    this.fetchMessage = this.fetchMessage.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeFetch = this.onChangeFetch.bind(this);
  }

  onChangeMessage(e) {
    this.setState({
      textarea: e.target.value,
    }, () => {
      if (this.state.keyword) {
        this.onChangeFetch();
      }
    });
  }

  onChangeFetch() {
    const url = '/post';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.props.user.name,
        textarea: this.state.textarea,
      }),
    }).then(res => res.json()).then((res) => {
      this.setState({
        log: res.message,
      });
    });
  }

  fetchMessage(e) {
    e.preventDefault();
    const url = '/post';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.props.user.name,
        textarea: this.state.textarea,
        postStatus: true,
      }),
    }).then(res => res.json()).then((res) => {
      if (res.post) {
        this.setState({
          textarea: '',
          keyword: false,
          log: res.message,
        });
        this.props.handlePost(res);
      } else {
        this.setState({
          keyword: true,
          log: res.message,
        });
      }
    });
  }

  render() {
    return (
      <section className="comment">
        <div className="wrapper-comment">
          <form className="form-comment" onSubmit={this.fetchMessage}>
            <p className="comment-name">You are logged as {this.props.user.name}</p>
            <label htmlFor="label-message" className="label-message">
              <p className="validate-msg">{this.state.log}</p>
              <textarea id="label-message" onChange={this.onChangeMessage} value={this.state.textarea} className="comment-message" placeholder="Your message" />
            </label>
            <CommentButton />
          </form>
        </div>
      </section>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
