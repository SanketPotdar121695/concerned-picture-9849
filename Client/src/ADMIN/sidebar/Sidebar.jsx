import React from 'react'
import css from './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h2><Link to="/admin/users">Users</Link></h2>
        <h2><Link to="/admin/posts">Posts</Link></h2> 
        <h2><Link to="/admin/deletedUsers">Deleted Users</Link></h2> 
        <h2><Link to="/admin/deletedPosts">Deleted Post</Link></h2> 
    </div>
  )
}

export default Sidebar
