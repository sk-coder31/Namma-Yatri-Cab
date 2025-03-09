import React, { useState } from "react";
import { Links,Link } from 'react-router-dom'

const CaptainLogin = () => {

   const [email, setEmail] = useState("");
     const [password,setPassword]=useState("");
     const [captainData,setCaptainData]=useState({});
   
     const submitHandler=(e)=>{
           e.preventDefault();
           setCaptainData({
               email:email,
               password:password
           })
           
           setEmail('');
           setPassword('');
           console.log(email,password);
     }
  return (
    <div>
      <div className=' p-7 h-screen  pt-8  w-full flex  flex-col bg-[url(source/yellow.jpeg)] bg-cover bg-center'>
      <img className='w-32 mx-auto pt-15' src="https://inclojure.org/images/sponsors/namma-yatri.png" alt="" />
      <img className='mx-auto' src="https://www.nammayatri.in/img/community.svg" alt="" />
        <form className='mt-10 mx-2' onSubmit={(e)=>{
            submitHandler(e);
        }}>
        <h3 className='text-lg mb-2 font-semibold'>What's your email</h3>
        <input required
        className='bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />
        <h3 className='text-lg mb-2 font-semibold'>Enter Password</h3>
        <input required
        className='bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='Password' />
        <button className='w-full border py-3 rounded font-semibold text-white bg-black'>Login</button>
        </form>
        <p className='text-center mt-7 font-semibold'>Join a fleet?
        </p>
        <Link to='/captain-signup' className=' font-semibold  text-center mt-2 py-3 bg-green-900 text-white rounded-md'> Register as a Captain</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
