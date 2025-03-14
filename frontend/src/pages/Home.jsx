import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='h-screen  pt-8  w-full flex justify-between flex-col bg-[url(source/carhome.jpg)] bg-cover bg-center'>
        <img className='w-24 ml-8 ' src="https://inclojure.org/images/sponsors/namma-yatri.png" alt="" />
        <div className='bg-white pb-7 py-5 px-5 text-center rounded-md'>
            <h2 className='text-xl font-bold'>Get Started with Namma Yatri</h2>
            <Link to='/loginAs' className='w-full flex items-center justify-center bg-yellow-400 text-black font-semibold py-3 px-4 rounded mt-5 '>Continue &#8594;</Link>
        </div>

      </div>
    </div>
  )
}

export default Home
