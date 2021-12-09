import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth'
// import { userIsAuthenticated } from './helpers/auth'

const AddandUpdate = () => {
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

  // useEffect(()=> {
  //   if (!userIsAuthenticated()) {
  //     Navigate('/add')
  //   }
  // })


 
  const handleChange = (event) => {
    const newFormData = { ...newRecord, [event.target.name]: event.target.value }
    console.log('newform->', newFormData)
    setNewRecord(newFormData)
  }

  
  
  // try {
  //   const { data } = axios.post('/api/records/', newRecord, {
  //     headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  //   }
  //   )
  //   const newRecordId = data._id
  //   Navigate(`/records/${newRecordId}`)
  // } catch (err){
  //   console.log(err.response.data)
  //   setErrors(err.response.data)
  // }
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const { data } = await axios.post('/api/records/', newRecord, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
      )
      console.log('this is data->',data.id)
      const newRecordId = data.id
      console.log('newID->', newRecordId)
      Navigate(`/records/${newRecordId}`)
    } catch (err){
      console.log(err.response.data)
      setErrors(err.response.data)
    }
  }
  return (
    <section className='addRecord'>
      <form className='form' onSubmit={handleSubmit}>
        <div className="field is-vertical">
          <div className='is-flex is-justify-content-space-around	'>
            <div className='subtitle is-3' id='formtitle'>Add Record</div>
            <button className="button" type='submit' id='addRecordSubmit' >
            Post Record
            </button>
          </div>
          <hr/>
      
        
          <div className="field-body" id ='formdetails'>
            <div className="field" id='details1'>
              <p className="control is-expanded">
                <input className="input" placeholder="artist" name='artist' value={newRecord.artist} onChange={handleChange}
                  // className={`input ${errors.name && 'is-danger' } `} 
                />
                {errors.name && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add an artist and or group name</p>}

              </p>
              <br/>
              <p className="control is-expanded ">
                <input className="input"  placeholder="title" name='title' value={newRecord.title} onChange={handleChange}/>
              </p>
              <br/>
              <p className="control is-expanded ">
                <input className="input"  placeholder="label" name='label' value={newRecord.label} onChange={handleChange}/>
              </p>
              <br/>
              {/* </div> */}
              {/* <div className="field" id='details2'> */}
              <p className="control is-expanded ">
                <input className="input"  placeholder="format" name='description' value={newRecord.description} onChange={handleChange}/>
              </p>
              <br/>
              <p className="control is-expanded ">
                <input className="input" placeholder="Catalog #" name='catalog_number' value={newRecord.catalog_number} onChange={handleChange}
                  
                />
                {errors.catalog_number && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add a catalog number for this record!</p>}
              </p>
              <br/>
            </div>
          </div>
        </div>
        {/* {errors.prepTime && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add a format for this record!</p>} */}
        <div className="field is-horizontal mt-6" id='recorddetailsform'>
          <div className="field-label is-normal" id='label'>
            <label className="label" >Image</label>
          </div>
          <div className="field-body" id='flexForm'>
            <div className="control ">
              <input type="file" name="image" value={newRecord.image}  
                className={`${errors.image && 'is-danger' } `} 
              />
              {errors.image && <p className='is-danger subtitle mt-2 mb-2 ml-0'>Please add an image</p>}
            </div>
          </div>
          
        </div>


  

  
        <br/>
    



    
      </form>
    </section>
  )
}

export default AddandUpdate