import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import NavBar from './components/NavBar'


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
      <section className="section">
        <div className="container">
          
          <div>
            <h2 className="titlehas-text-centered">{record.artist}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={record.image} alt={record.title}/>
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Title</h4>
                <p>{record.title}</p>
                <hr />
                <h4 className="title is-4">Label</h4>
                <hr />
                <p>{record.label}</p>
                <hr />
                <h4 className="title is-4">Format</h4>
                <hr />
                <p>{record.description}</p>
                <hr />
              </div>
            </div>
          </div>
          : 
          <h2 className="title has-text-centered">
            {hasError ? 'Oh something went wrong ⚠️' : '...loading  '}
          </h2>
          
        </div>
      </section>
    </>
  )
}

export default RecordShow
