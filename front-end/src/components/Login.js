import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/login', formData)
      navigate('/')
    } catch (e) {
      console.log(e.response.data)
    }

    console.log('Form has been submitted')
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="control">
                <input
                  className="input"
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Login
