import React from 'react'
import { Links,Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='h-screen pt-8 w-full flex justify-between flex-col bg-[url(source/yellow.jpeg)] bg-center bg-cover '>
        
        <img className='w-36 mx-auto pt-15 ' src="https://inclojure.org/images/sponsors/namma-yatri.png" alt="" />
        <img src="https://nammayatri.in/img/autoDriverMob-NammaYatri.png" alt="" />
        <div className=' pb-7 py-5 px-5 text-center rounded-md flex justify-between flex-col'>
            <Link to='/login' className='border py-3 bg-green-800 text-white font-semibold rounded-md my-2'>Login as User</Link>
            <Link to='/captain-login'  className='border py-3 bg-black text-white font-semibold rounded-md my-2'>Login as Captain</Link>
        </div>

      </div>
    </div>
  )
}

export default Login
