import React from 'react'


const Home = () => {
  return (
    <div>
      <div className='h-screen  pt-8  w-full flex justify-between flex-col bg-[url(source/homebg.jpeg)] bg-cover bg-center'>
        <img className='w-24 ml-8 ' src="https://inclojure.org/images/sponsors/namma-yatri.png" alt="" />
        <div className='bg-white pb-7 py-5 px-5 text-center rounded-md'>
            <h2 className='text-xl font-bold'>Get Started with Namma Yatri</h2>
            <button className='w-full bg-yellow-400 text-black font-semibold py-3 px-4 rounded mt-5 '>Continue &#8594;</button>
        </div>

      </div>
    </div>
  )
}

export default Home
