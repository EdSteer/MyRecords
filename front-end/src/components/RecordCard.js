import React from 'react'
import { Link } from 'react-router-dom'


const RecordCard = ({ id, artist, title, image }) => {
  // console.log(_id)

  return (
    
    <div key={id} className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
      <Link to={`/records/${id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{artist}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={title}></img>
            </figure>
          </div>
          <div className="card-content">
            <h5>{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecordCard