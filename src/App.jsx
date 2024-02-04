import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AddContact from './Pages/AddContact'
import Contact from './Components/Contact'
import ViewContact from './Pages/ViewContact'


const App = () => {
  return (
    <Router>

      

      
      <Routes>
        <Route path='/' element={<Contact/>} />

        <Route path='/Form' element={<AddContact/>} />
        <Route path='/View' element={<ViewContact />} />
        
      </Routes>


    </Router>
  )
}

export default App
