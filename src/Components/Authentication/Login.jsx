import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAdmin, getAdminDetails } from '../../Redux/User/user';

const Login = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const userState = useSelector(state => state.user);

    const [user, setUser] = useState({ email: "", password: "" });

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }


    useEffect(()=>{
        setUser({ email: "", password: "" });
    },[])

    const handleLoginAdmin = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        dispatch(LoginAdmin(email, password));
        
        setUser({ email: "", password: "" });
        
        Navigate("/");
    }


    return (
        <section className="bg-white ">
            <div className="flex flex-col items-center justify-center px-6 mt-20 mx-auto md:mt-20 lg:py-0">
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold  dark:text-black">
                    <img className="w-8 h-8 mr-1" src="https://www.svgrepo.com/show/243072/admin.svg" alt=""/>
                        Agrivision Admin Panel
                </a> */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-black">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-semibold ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 font-semibold focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" value={user.email} onChange={handleInputs} required=""/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-semibold text-black-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={user.password} required="" onChange={handleInputs}/>
                            </div>
                            <div className="flex items-center justify-between">
                               <div></div>
                                <a href="#" className="text-sm font-semibold text-primary-600 hover:underline dark:text-primary-500 text-green-600">Forgot password?</a>
                            </div>
                            <button type="" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleLoginAdmin}>Sign in</button>
                            <p className="text-sm  text-black-500 font-semibold ">
                                Don’t have an account yet? <Link to="/register" className="font-semibold text-primary-600 hover:underline text-green-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login