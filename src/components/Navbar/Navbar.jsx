import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img src="images/me-1.jpg" alt="me" className="logo" />
        <span>AN</span>
      </div>

      <div className="link-container">
        <ul>
          <li> <a href="#home">01. Home</a></li>
          <li><a href="#about">02. About</a></li>
          <li><a href="#projects">03. Projects</a></li>
          <li><a href="#contact">04. Contact</a></li>
          <button className='btn'>RESUME</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar