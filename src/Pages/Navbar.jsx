import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import showToast from '../Utils/showToast';
import { setUserToInital } from '../Redux/User/user';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    
    const [open,setOpen]  = useState(false);

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const userState = useSelector(state => state.user);

    const onClickLogout = () => {
        localStorage.clear();
        dispatch(setUserToInital());
        showToast({
            type: "success",
            msg: "Logout Successfully",
            duration: 3000,
        })
        Navigate("/login")
    }

    
    return (

        <nav class="bg-gray-100 border-gray-200 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://www.agrivision4u.com/" class="flex items-center">
                    <img src="https://www.agrivision4u.com/static/media/LogoG.9129b183ff9553f0fcf2113780c3de26.svg" class="h-10 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-black"></span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={()=>setOpen(!open)}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class={open?"w-full md:block md:w-auto":"hidden w-full md:block md:w-auto"}>
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  md:dark:bg-white-900 ">
                        <li>
                            <Link to="/" class="block py-2 pl-3 pr-4 text-black font-semibold">Home
                            </Link>
                        </li>
                        {!userState.data?<li>
                            <Link to="/login" class="block py-2 pl-3 pr-4 text-black font-semibold" aria-current="page">Login</Link>
                        </li>:""}
                        {userState.data && userState.data.role==='superadmin'?<li>
                            <Link to="/register" class="block py-2 pl-3 pr-4 text-black font-semibold" aria-current="page">Register</Link>
                        </li>:null}
                        {userState.data?<li>
                            <div class="block py-2 pl-3 pr-4 text-black font-semibold hover:cursor-pointer" onClick={onClickLogout}>Logout</div>
                        </li>:""}
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-black font-semibold">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar