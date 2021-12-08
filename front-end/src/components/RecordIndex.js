import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecordCard from './RecordCard'
import NavBar from './NavBar'


const RecordIndex = () => {
  const [records, setRecords] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/records/') // * <-- replace with your endpoint
        console.log('data->', data)
        setRecords(data)
        
      } catch (err) {
        setHasError(true)
      }
    }
     
    // const sortedRecords = recordsArray.sort((a, b) => {
    //   if (a.strRecord > b.strRecord) {
    //     return 1
    //   } else if (b.strRecord > a.strRecord) {
    //     return -1
    //   } else {
    //     return 0
    //   }
    // })
    // setRecords(sortedRecords, recordsArray)
    
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
      <NavBar/>
      <section className="section">
        <div className="container">
          {records.length ? 
            <div className="columns is-multiline">
              {records.map(record => {
                return (
                  <><RecordCard key={record.id} {...record} /></>
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