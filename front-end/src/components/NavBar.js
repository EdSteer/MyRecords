import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/"></Link>
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="has-text-white" to="/records"></Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item"><Link className="has-text-black" to="/register">Register</Link></div>
          <div className="navbar-item"><Link className="has-text-black" to="/login">Login</Link></div>
          
        </div>
        
      </div>
    </nav>
  )
}

export default NavBar