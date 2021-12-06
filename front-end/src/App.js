import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Home from './components/Home'
import RecordIndex from './components/RecordIndex'
import RecordShow from './components/RecordShow'
// import Register from './components/Register'
// import Login from './components/Login'

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/records" element={<RecordIndex/>}></Route>
        <Route exact path="/records/:id" element={<RecordShow/>}/>
        {/* <Route exact path="/register" component={Register}/> */}
        {/* <Route exact path="/login" component={Login}/> */}

        
      </Routes>
    </Router>
  )
}

export default App