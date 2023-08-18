import React, { useEffect, useState } from 'react'
import { createAdmin } from '../../Redux/User/user';
import { useDispatch } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();

    const [user, setUser] = useState({ email: "", password: "", username: "", role: "" });

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const detectChange = (e) => {
        if(e.target.value === 'Super Admin'){
            setUser({ ...user, role: 'superadmin' });
        }
        else if(e.target.value === 'Admin'){
            setUser({ ...user, role: 'admin' });
        }
        else if(e.target.value === 'Mentor'){
            setUser({ ...user, role: 'mentor' });
        }
        else{
            setUser({ ...user, role: '' });
        }

    }

    useEffect(() => {

        setUser({  email: "", password: "", username: "", role: "" });

    }, [])

    const handleCreateAdmin = async (e) => {
        e.preventDefault();
        const { email, password, username, role } = user;
        dispatch(createAdmin(username,password,email,role));
        setUser({  email: "", password: "", username: "", role: "" });
    }



    return (
        <section className="bg-white overflow-auto">
            <div className="flex flex-col items-center justify-center px-6 mt-10 mx-auto md:mt-10 lg:py-0 mb-10 ">
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold  dark:text-black">
                    <img className="w-8 h-8 mr-1" src="https://www.svgrepo.com/show/243072/admin.svg" alt=""/>
                        Agrivision Admin Panel
                </a> */}
                <div className="w-full bg-white rounded-lg  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-black">
                            Register a user
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="text" className="block mb-2 text-sm font-semibold ">Name</label>
                                <input type="text" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 font-semibold focus:border-primary-600 block w-full p-2.5 " placeholder="John Doe" value={user.username} onChange={handleInputs} required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-semibold ">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 font-semibold text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" value={user.email} onChange={handleInputs} required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-semibold text-black-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 font-semibold border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={user.password} required="" onChange={handleInputs} />
                            </div>

                            <label for="countries" class="block text-sm font-semibold text-black ">Select the role</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold" onChange={detectChange}>
                                <option className='font-semibold'>None</option>
                                <option className='font-semibold'>Super Admin</option>
                                <option className='font-semibold'>Admin</option>
                                <option className='font-semibold'>Mentor</option>
                            </select>

                            <button type="" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleCreateAdmin}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register