import React from 'react'
import AdminNavbar from './adminNavbar/AdminNavbar'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'
import css from './Admin.css'

const Admin = () => {
  return (
    <div className='Admin'>
      {/* <AdminNavbar/> */}
      <div className='adminContent'>
        <Sidebar/>
        <Content/>
      </div>
    </div>
  )
}

export default Admin
