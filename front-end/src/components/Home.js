import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <section className="hero is-fullheight is-warning">
      <div className="hero-body">        
        <div className="buttons">
          <a className="button is-primary">
            <Link className="has-text-white" to="/register">Register</Link>
          </a>
          <a className="button is-light">
            <Link className="has-text-black" to="/login">login</Link>
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Home