import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<  Home/>}/>
    <Route path='/checkout/:id' element={<Checkout/>}/>
    
    </Routes>
  )
}

export default App