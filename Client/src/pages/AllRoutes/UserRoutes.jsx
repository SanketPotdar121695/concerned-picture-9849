import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../UserPages/Home';
import Signup from '../UserPages/Signup';
import Login from '../UserPages/Login';
import Posts from '../UserPages/Posts';
import PageNotFound from '../../utils/PageNotFound';
import AllPostList from '../../components/AllPostsList';
import { PrivateRoute } from '../../hoc/PrivateRoute';

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addpost' element={<PrivateRoute><Posts /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/allpost' element={<PrivateRoute><AllPostList /></PrivateRoute>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
