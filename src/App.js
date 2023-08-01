import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import MainHome from './components/MainHome'
import HotelPage from './components/HotelPage'
import UseScrollToTop from './components/useScrollToTop'
import { useAuth } from './contexts/auth'
import Login from './components/Login/Login'
import { ToastContainer } from 'react-toastify'
import SignUp from './components/SignUp/SignUp'
import { getAuth } from 'firebase/auth'

const App = () => {
  const { authUser, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(false);

  const auth = getAuth();
  console.log(auth.idTokenSubscription.auth.currentUser);

  useEffect(() => {
    if (!authUser) {
      navigate('/login')
    }

    // eslint-disable-next-line
  }, [authUser])


  console.log(authUser, isLoading);
  useEffect(() => {
    if (!window.location.href.includes('login')) {
      setShowHeader(true);
    }

    // eslint-disable-next-line
  }, [window.location.href])

  return (
    <>
      {showHeader ? <Header /> : ''}

      <main className='w-full md:max-w-[90vw] sm:w-[98vw] sm:text-center mx-auto'>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/hotels/:hotel' element={<HotelPage />} />

        </Routes>
        <div className='flex justify-end sticky bottom-10 right-5'>
          <UseScrollToTop />
        </div>
      </main>

    </>
  )
}

export default App