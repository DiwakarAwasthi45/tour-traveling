import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/frontend/Home'
import Destination from './pages/frontend/Destination'
import Packages from './pages/frontend/Packages'
import About from './pages/frontend/About'
import Contact from './pages/frontend/Contact'
import Detail from './pages/frontend/Detail'
import Booking from './pages/frontend/Booking'


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destinations' element={<Destination/>}/>
      <Route path='/packages' element={<Packages/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/booking/:id' element={<Booking/>}/>
       
       
   </Routes>
   </>
  )
}

export default App
