import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Home from '../Home'
import YoutubeView from '../Testing/YoutubeView'
import UseReducerSample from '../Testing/Hooks/useReducerSample'
import GsapAnimation from '../Testing/GsapAnimation'
import MultiSelect from '../Testing/MultiSelect'
import ImageUpload from '../Testing/ImageUpload'
import UseRefSample from '../Testing/Hooks/UseRefSample';
import ThreeJS from '../Testing/Three JS/ThreeJS';

function AnimationedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />}/>
          <Route path='/youtube' element={<YoutubeView />}/>
          <Route path='/useref' element={<UseRefSample />}/>
          <Route path='/usereducer' element={<UseReducerSample />}/>
          <Route path='/gsap' element={<GsapAnimation />}/>
          <Route path='/multiselect' element={<MultiSelect />}/>
          <Route path='/imageupload' element={<ImageUpload />}/>
          <Route path='/threejs' element={<ThreeJS />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimationedRoutes
