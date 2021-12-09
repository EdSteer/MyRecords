import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth'
import AddandUpdate from './AddandUpdate'
import { userIsAuthenticated } from './helpers/auth'


const AddRecord = () => {
  const Navigate = useNavigate()
  const [newRecord, setNewRecord] = useState({
    artist: '',
    image: '',
    title: '',
    label: '',
    catalog_number: '',
    description: '',
    video: '',
  })

  const [errors, setErrors] = useState({
    artist: '',
    image: '',
    title: '',
    label: '',
    catalog_number: '',
    description: '',
    video: '',
  })

  useEffect(()=> {
    if (!userIsAuthenticated()) {
      Navigate('/')
    }
  })


 
  const handleChange = (event) => {
    const newFormData = { ...newRecord, [event.target.name]: event.target.value }
    setNewRecord(newFormData)
  }

  
  
  try {
    const { data } = axios.post('/api/records', newRecord, {
      headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
    }
    )
    const newRecordId = data._id
    Navigate(`/records/${newRecordId}`)
  } catch (err){
    console.log(err.response.data.errors)
    setErrors(err.response.data.errors)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const { data } = await axios.post('/api/records', newRecord, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
      )
      const newRecordId = data._id
      Navigate(`/records/${newRecordId}`)
    } catch (err){
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }




  return (
    <>
      <AddandUpdate
        newRecord={newRecord}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
  
    
    </>
  )
}

export default AddRecord