import React from 'react';

export default function OnePost({ post, deleteHandler, currentUser }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.text}</p>

        <h4>{post.User?.username}</h4>

        {currentUser.id === post.user_id
          && <button className="btn btn-danger" type="button" onClick={() => deleteHandler(post.id)}>Delete</button>}

      </div>
    </div>
  );
}
