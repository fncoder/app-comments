import React from 'react';
import ReactDOM from 'react-dom';


class Comment extends React.Component {
  constructor() {
    super();

    this.submitMessage = this.submitMessage.bind(this);
  }

  render() {
    return (
      <section className="comment">
        <div className="wrapper-comment">
          <form className="form-comment">
            <p className="comment-name">You are logged as {'Krystian'}</p>
            <label htmlFor="label-message" className="label-message">
              Message
              <textarea id="label-message" className="comment-message" placeholder="Your message" />
            </label>
            <button type="submit" className="btn btn--message">Send</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Comment;
