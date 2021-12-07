import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../components/assets/MyRecordslogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="./">
          <img src={ logo } width="300" height="200"/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              menu
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Add
              </a>
              <a className="navbar-item">
                Delete
              </a>
              <a className="navbar-item">
                Update
              </a>
              <hr className="navbar-divider"></hr>
              
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <Link className="has-text-white" to="/register">Register</Link>
              </a>
              <a className="button is-light">
                <Link className="has-text-black" to="/login">login</Link>
              </a>
              <a className="navbar-item">
              logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar