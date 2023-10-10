import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Create from './Pages/Create/Create'
import Videogames from './Pages/Videogames/Videogames'
import Details from './Pages/Details/Details'
import Landing from './Pages/Landing/landing'

import NavBar from './Components/NavBar/NavBar'
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
          <Route path={'/details'} Component={Details} />
        </Routes>
      </BrowserRouter>
      <h1>Footer</h1>
    </>
  )
}

export default App
