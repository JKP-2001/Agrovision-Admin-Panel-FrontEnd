import React from 'react'
import Navbar from './Navbar'
import Register from '../Components/Authentication/Register'

const RegisterPage = () => {
    return (
        <>
            <div className='sticky top-0'>
                <div className=''>
                    <Navbar />
                </div>
            </div>
            <Register />
        </>
    )
}

export default RegisterPage