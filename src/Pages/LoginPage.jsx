import React from 'react'
import Navbar from './Navbar'
import Login from '../Components/Authentication/Login'

const LoginPage = () => {
  return (
    <>

<div className='sticky top-0'>
                <div className=''>
                    <Navbar />
                </div>
            </div>

        <Login />
    </>
  )
}

export default LoginPage