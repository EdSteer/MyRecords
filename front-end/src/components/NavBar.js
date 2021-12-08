import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../components/assets/MyRecordslogo.png'
// import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="./">
          <img className="logo" src={ logo }/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true">add</span>
          <span aria-hidden="true">logout</span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          

          
                        
          <hr className="navbar-divider"></hr>
              
          
        </div>
      </div>

      <div className="navbar-end">
        
        <nav className="navbar" role="navigation">
          <a className="navbar-item">
            add
          </a>
         
          
        </nav>
        
        
      </div>
      
      
    </nav>
  )
}

export default NavBar