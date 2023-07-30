import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MainHome from './components/MainHome'
import HotelPage from './components/HotelPage'
import UseScrollToTop from './components/useScrollToTop'

const App = () => {
  return (
    <>
      <Header />
      <main className='w-full md:max-w-[90vw] sm:w-[98vw] sm:text-center mx-auto'>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/hotels/:hotel' element={<HotelPage />} />

        </Routes>
        <div className='flex justify-end z-50 relative'>
          <UseScrollToTop />
        </div>
      </main>
    </>
  )
}

export default App