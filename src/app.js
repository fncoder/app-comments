import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './scss/global.scss';
import RenderHTML from './index.html';
import FormRegister from './components/form-register/FormRegister.jsx';
import FormLogin from './components/form-login/FormLogin.jsx';
import Comment from './components/comment/Comment.jsx';
import Posts from './components/posts/Posts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: true,
      login: false,
      next: false,
      user: undefined,
      posts: [],
    };

    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handlePost = this.handlePost.bind(this);
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

  handlePost(value) {
    this.setState({
      posts: [...this.state.posts, value],
    });
  }

  componentDidMount() {
    const url = 'http://localhost:3001/getpost';
    fetch(url)
      .then(res => res.json()).then((res) => {
        if (res.length > 0) {
          res.forEach((value, index) => {
            this.handlePost(value);
          });
        }
      });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.register ? <FormRegister handleLogin={this.handleLogin} /> : null}
        {this.state.login ? <FormLogin
          handleRegister={this.handleRegister}
          handleComment={this.handleComment}
        /> : null}
        {this.state.next ?
          <div className="section">
            <Posts posts={this.state.posts} />
            <Comment
              handlePost={this.handlePost}
              user={this.state.user}
            />
          </div>
           : null}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
