import React from 'react'
import { Routes,Router, Route } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSign from './pages/UserSign'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSign from './pages/CaptainSign'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSign />}/>
      <Route path='/captain-login' element={<CaptainLogin />}/>
      <Route path='/captain-signup' element={<CaptainSign />}/>

    </Routes>
    </div>
  )
}

export default App
 