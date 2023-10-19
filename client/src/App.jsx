import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Create from './Pages/Create/Create'
import Videogames from './Pages/Videogames/Videogames'
import Details from './Pages/Details/Details'
import Landing from './Pages/Landing/landing'

import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path={'/'} Component={Landing} />
          <Route path={'/create'} Component={Create} />
          <Route path={'/videogames'} Component={Videogames} />
          <Route path={'/videogames/:id'} Component={Details} />

        </Routes>
      <Footer />  
      </BrowserRouter>
    </>
  )
}

export default App
