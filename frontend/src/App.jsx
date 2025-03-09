import React from 'react'
import { Routes,Router, Route } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSign from './pages/UserSign'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSign from './pages/CaptainSign'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/loginAs' element={<Login/>}/>
      <Route path='/Login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSign />}/>
      <Route path='/captain-login' element={<CaptainLogin />}/>
      <Route path='/captain-signup' element={<CaptainSign />}/>

    </Routes>
    </div>
  )
}

export default App
 