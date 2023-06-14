import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../UserPages/Home";
import Signup from "../UserPages/Signup";
import Login from "../UserPages/Login";
import Posts from "../UserPages/Posts";
const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addpost" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Page Not Found..!</h1>} />
      </Routes>
    </>
  );
};

export default UserRoutes;
