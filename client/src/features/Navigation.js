import React from 'react'
import { NavLink } from 'react-router-dom';


const Navigation = () => {

  return (
    <div className="navigation" >
      <NavLink to='/login' className="adminLink">Admin Login</NavLink>
      <br/>
      <h1 style={{color: "bisque"}}>Coffee Shop</h1>
        <NavLink to='/' className="navLink">Home</NavLink>
        <NavLink to='/announcements' className="navLink">Announcements</NavLink>
        <NavLink to='/drinks' className="navLink">Drink Menu</NavLink>
        <NavLink to='/food' className="navLink">Food Menu</NavLink>
        <NavLink to='/gallery' className="navLink">Image Gallery</NavLink>
        <hr />
        <br/>
    </div>
  )
}

export default Navigation