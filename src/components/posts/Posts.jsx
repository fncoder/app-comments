import React from 'react';
import ReactDOM from 'react-dom';

const Posts = (props) => {
  const items = props.posts.map((value, index) => (
    <div key={index} className={`post post ${index + 1}`}>
      <p className="post-author">{value.name}</p>
      <p className="post-date">{value.date}</p>
      <p className="post-message">{value.textarea}</p>
    </div>
  ));
  return (
    <section className="posts">
      <div className="wrapper-posts">
        {items}
      </div>
    </section>
  );
};

export default Posts;
