import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login/', formData)
      setTokenToLocalStorage(data.token)
      navigate.push('/api/records/')
    } catch (err) {
      
      setError(true)
    }

    console.log('Form has been submitted')
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="box column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                 
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
      
                />
              </div>
              {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Log Me In!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Login
