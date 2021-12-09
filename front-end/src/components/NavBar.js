import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../components/assets/MyRecordslogo.png'
// import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item ml-4" href="./">
            <img className="logo" src={ logo }/>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar">
              <div className="search-box">
                <div className="field">
                  <p className="control is-expanded has-icons-right">
                    <input className="input" type="search" placeholder="Search..."/>
                    <span className="icon is-small is-right"><i className="fas fa-search"></i></span>
                  </p>
                </div>
              </div>            
            </div>
            <nav className="navbar ml-6" role="navigation">
              <a className="navbar-item" href="/Add">
                add
              </a>
            
              
            </nav>
                
            
          </div>
        </div>

        {/* <div className="navbar-end" id="navadd">
          
          <nav className="navbar" role="navigation">
            <a className="navbar-item">
              add
            </a>
          
            
          </nav>
          
          
        </div> */}
        
        
      </nav>
    </>
  )
}

export default NavBar