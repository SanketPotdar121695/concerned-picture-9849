import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './ContentData/Users'
import Posts from './ContentData/APosts'
import DeletedUsers from './ContentData/DeletedUsers'
import DeletedPosts from './ContentData/DeletedPosts'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<Users/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/admin/deletedUsers" element={<DeletedUsers/>} />
        <Route path="/admin/deletedPosts" element={<DeletedPosts/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
