import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../UserPages/Home';
import Signup from '../UserPages/Signup';
import Login from '../UserPages/Login';
import Posts from '../UserPages/Posts';
import PageNotFound from '../../utils/PageNotFound';
import AllPostList from '../../components/AllPostsList';
import { PrivateRoute } from '../../hoc/PrivateRoute';
import Profile from '../UserPages/Profile';
import SinglePostPage from '../UserPages/SinglePostPage';
import Admin from '../../ADMIN/Admin';
import Users from '../../ADMIN/content/ContentData/Users';
import APosts from '../../ADMIN/content/ContentData/APosts';
import DeletedPosts from '../../ADMIN/content/ContentData/DeletedPosts';
import DeletedUsers from '../../ADMIN/content/ContentData/DeletedUsers';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/addpost'
        element={
          <PrivateRoute>
            <Posts />
          </PrivateRoute>
        }
      />
      <Route
        path='/profile'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/singlepost/:blogId' element={<SinglePostPage />} />
      <Route
        path='/allpost'
        element={
          <PrivateRoute>
            <AllPostList />
          </PrivateRoute>
        }
      />

      <Route path='*' element={<PageNotFound />} />

      {/* <Route path="/admin" element={<Admin />} />
      <Route path="/admin/posts" element={<APosts />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/deletedPosts" element={<DeletedPosts />} />
      <Route path="/admin/deletedUsers" element={<DeletedUsers />} /> */}
      <Route path="admin" element={<Admin />}>
        <Route path="posts" element={<APosts />} />
        <Route path="users" element={<Users />} />
        <Route path="deletedPosts" element={<DeletedPosts />} />
        <Route path="deletedUsers" element={<DeletedUsers />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
