import React from 'react';
import ReactDOM from 'react-dom';


class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="comment">
        <div className="wrapper-comment">
          <form className="form-comment">
            <p className="comment-name">You are logged as Krystian</p>
            <label htmlFor="label-message" className="label-message">
              <textarea id="label-message" className="comment-message" placeholder="Your message" />
            </label>
            <button type="submit" className="btn btn--message"><span className="btn-name">Send</span></button>
          </form>
        </div>
      </section>
    );
  }
}

export default Comment;
