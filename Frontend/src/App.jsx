import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AnimationedRoutes from './components/Animation/AnimationedRoutes'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <AnimationedRoutes />
      </Router>
    </>
  )
}

export default App
