import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'


const RecordShow = () => {
  const [record, Setrecord] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/records/${id}`)
        
        Setrecord(data)
        console.log('data->', data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  console.log(record)


  if (!record) return null
  return (
    <>
      <NavBar/>
      <section className="section">
        <div className="container">
          
          <div>
            <h3 className="title-has-text-centered is-size-1" id="artist">{record.artist}</h3>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={record.image} alt={record.title}/>
                </figure>
              </div>
              <div className="column is-half">
                <h3 className="title is-4">Title:</h3>
                <strong>{record.title}</strong>
                <hr />
                <h3 className="title is-4">Label:</h3>
                <hr />
                <strong>{record.label}</strong>
                <hr />
                <h3 className="title is-4">Format:</h3>
                <hr />
                <strong>{record.description}</strong>
                <hr />
              </div>
            </div>
          </div>
          : 
          <h2 className="title has-text-centered">
            {hasError ? 'Oh something went wrong ⚠️' : ''}
          </h2>
          
        </div>
      </section>
    </>
  )
}

export default RecordShow
