import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'


const RecordShow = ({ artist, image, title, label, description }) => {
  // const [record, Setrecord] = useState([])
  // const [hasError, setHasError] = useState(false)
  // const { pk } = useParams()

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/records/${pk}`)
  //       Setrecord(data)
  //     } catch (err) {
  //       setHasError(true)
  //     }
  //   }
  //   getData()
  // }, [pk])

  // console.log(record)


  // if (!record) return null
  return (
    <section className="section">
      <div className="container">
        <>
          <div>
            <h2 className="titlehas-text-centered">{artist}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={image} alt={title}/>
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4"><span role="img" aria-label="glass"></span>Title</h4>
                <p>{title}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="globe"></span>Label</h4>
                <hr />
                <p>{label}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="drunk"></span>Format</h4>
                <hr />
                <p>{description}</p>
                <hr />
              </div>
            </div>
          </div>
          : 
          <h2 className="title has-text-centered">
            {/* {hasError ? 'Oh something went wrong ⚠️' : '...loading  '} */}
          </h2>
        </>
      </div>
    </section>
  )
}

export default RecordShow
