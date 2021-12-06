import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecordCard from './RecordCard'
import RecordShow from './RecordShow'

const RecordIndex = () => {
  const [records, setRecords] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/records') // * <-- replace with your endpoint
        setRecords(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/records') // * <-- replace with your endpoint
  //     console.log(res.data)
  //   }
  //   getData()
  // })

  // console.log('records on state ->', records)

  return (
    <>      
      <section className="section">
        <div className="container">
          {records.length ? 
            <div className="columns is-multiline">
              {records.map(record => {
                return (
                  <><RecordCard key={record.pk} {...record} /><RecordShow key={record.pk} {...record} /></>
                )
              })}
            </div>
            :
            <h2 className="title has-text-centered">
              {hasError ? 'Something has gone wrong 🆘' : 'Records loading...⏳'}
            </h2>
          }   
        </div>
      </section>
    </>
  )
  // return (
  //   <h1>records</h1>
  // )
}



export default RecordIndex