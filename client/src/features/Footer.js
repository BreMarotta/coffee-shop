import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <NavLink to='/login'>Admin Login</NavLink>
        <br/>
        <>Site Creator Information: </>
        <a href="https://bremarotta.wixsite.com/breanne"target="_blank">Portfolio</a>
        <a href="https://www.linkedin.com/in/bremarotta/" target="_blank">LinkedIn</a>
        <a href="https://github.com/BreMarotta/maintenace-tracker" target="_blank">Github</a>

    </div>
  )
}

export default Footer