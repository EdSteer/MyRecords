import React from 'react'

const AddandUpdate = ( { newRecord, handleSubmit, errors, handleChange, displayImage } ) => {

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
                <input type="text" placeholder="artist" name='name' value={newRecord.artist} onChange={handleChange}
                  className={`input ${errors.name && 'is-danger' } `} 
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
            </div>
            <div className="field" id='details2'>
              <p className="control is-expanded ">
                <input  placeholder="format" name='format' value={newRecord.description} onChange={handleChange}
                  className={`input ${errors.description && 'is-danger' } `} 
                />
                {errors.prepTime && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add a format for this record!</p>}
              </p>
              <br/>
              <p className="control is-expanded ">
                <input placeholder="Catalog #" name='catalog#' value={newRecord.catalog_number} onChange={handleChange}
                  className={`input ${errors.catalog_number && 'is-danger' } `} 
                />
                {errors.catalog_number && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add a catalog number for this record!</p>}
              </p>
              <br/>
            </div>
          </div>
        </div>

        <div className="field is-horizontal mt-6" id='recorddetailsform'>
          <div className="field-label is-normal" id='label'>
            <label className="label" >Image</label>
          </div>
          <div className="field-body" id='flexForm'>
            <div className="control ">
              <input type="file" name="image" value={newRecord.image} onChange={displayImage} 
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