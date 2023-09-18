import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from '../landingPage/landingPage'

const RouterFile = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/diary' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterFile