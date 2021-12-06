import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <section className="hero is-fullheight is-warning">
      <div className="hero-body">        
        <div className="container">
          <Link to="./records" className="button is-info">RECORDS</Link>
        </div>
        
      </div>
    </section>
  )
}

export default Home