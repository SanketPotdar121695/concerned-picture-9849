import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './ContentData/Users'
import Posts from './ContentData/Posts'
import DeletedUsers from './ContentData/DeletedUsers'
import DeletedPosts from './ContentData/DeletedPosts'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Users/>} />
        <Route path="/admin/posts" element={<Posts/>} />
        <Route path="/admin/deletedUsers" element={<DeletedUsers/>} />
        <Route path="/admin/deletedPosts" element={<DeletedPosts/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
