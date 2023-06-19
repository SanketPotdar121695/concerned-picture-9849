import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../UserPages/Home';
import Signup from '../UserPages/Signup';
import Login from '../UserPages/Login';
import Posts from '../UserPages/Posts';
import PageNotFound from '../../utils/PageNotFound';
import Users from '../../ADMIN/content/ContentData/Users';
// import APosts from '../../ADMIN/content/ContentData/APosts';
import DeletedUsers from '../../ADMIN/content/ContentData/DeletedUsers';
import DeletedPosts from '../../ADMIN/content/ContentData/DeletedPosts';
import Admin from '../../ADMIN/Admin';
import APosts from '../../ADMIN/content/ContentData/APosts';
const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addpost' element={<Posts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path="admin" element={<Admin />}>
          <Route path="posts" element={<Users/>} />
          <Route path="users" element={<Users />} />
          <Route path="deletedPosts" element={<DeletedPosts />} />
          <Route path="deletedUsers" element={<DeletedUsers />} />
          </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
