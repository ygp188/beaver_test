import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import BeaversPage from './Beavers/BeaversPage';
import SignUpPage from './Auth/SignUpPage';
import SignInPage from './Auth/SignInPage';
import PostsPage from './Posts/PostsPage';

export default function App({ beavers, posts, user }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  const [allPosts, setAllPosts] = useState(posts || []);

  return (
    <div className="container">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/beavers" element={<BeaversPage beavers={beavers} currentUser={currentUser} />} />
        <Route path="/posts" element={<PostsPage allPosts={allPosts} setAllPosts={setAllPosts} currentUser={currentUser} />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}
