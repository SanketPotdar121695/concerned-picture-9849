import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import  css from "./AdminNavbar.css"

const AdminNavbar = () => {
  return (
    <div className='adminNavbar'>
      <img src='https://static01.nyt.com/images/2011/10/20/books/review/hellersymbols/hellersymbols-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale' alt='Logo' width={'60px'}  />
      <h2>Welcome Admin</h2>
      <button className='logoutButton' >Logout</button>
    </div>
  )
}

export default AdminNavbar
