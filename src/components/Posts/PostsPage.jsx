import axios from 'axios';
import React from 'react';
import OnePost from './OnePost';
import PostsForm from './PostsForm';

export default function PostsPage({ allPosts, setAllPosts, currentUser }) {
  const deleteHandler = async (id) => {
    const res = await axios(`/api/posts/delete/${id}`);
    if (res.status === 200) {
      setAllPosts((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <div>
      <PostsForm setAllPosts={setAllPosts} />
      {allPosts.map((post) => (
        <OnePost
          key={post.id}
          post={post}
          deleteHandler={deleteHandler}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}
