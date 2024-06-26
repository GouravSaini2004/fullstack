import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { logout } from '../slice/loginSlice';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('email');
        Cookies.remove('_id');
        Cookies.remove('image');
        Cookies.remove('fullname');
        Cookies.remove('password');
        navigate('/');
        window.location.reload();
        
    }
    const auth = useSelector((state) => state.auth.isAuthenticated)
    const [cla, setCla] = useState("hidden");
    const [cla2, setCla2] = useState("hidden");

    const toggleDropdown = (setState) => {
        setState(prevState => (prevState === "hidden" ? "block" : "hidden"));
    };

    return (
        <nav className="bg-gray-800 h-14 sticky z-50 top-0">
            <div className="relative flex justify-between">
                <div className="flex">
                    <ul className="hidden md:flex md:justify-between md:w-72 md:mt-4 md:ml-7">
                        <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                            <img src="https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=1080&q=72" alt="" width={40} height={40} />
                        </li>
                        <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                            <Link to='/'>Home</Link>
                        </li>
                        {!auth && (
                            <>
                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                                    <Link to='/Signup'>Signin</Link>
                                </li>
                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                                    <Link to='/Login'>Login</Link>
                                </li>
                            </>
                        )}
                        {auth && (
                            <>
                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                                    <Link to='/post'>Add post</Link>
                                </li>
                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                                    <Link to='/allblog'>All post</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <ul className="md:hidden ml-5 mt-2">
                        <li>
                            <div className="dropdown relative inline-block">
                                <button onClick={() => toggleDropdown(setCla2)} className="dropbtn cursor-pointer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9LrYo_RQwLGfCYNfWl_u4dMdzGPZSzqPYRQ&s" width={40} height={40} alt="" /></button>
                                {!auth && (
                                    <>
                                        <div className={`dropdown-content bg-black absolute w-32 rounded-lg h-32 -right-22 ${cla2}`}>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/'>Home</Link>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/Signup'>Signin</Link>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/Login'>login</Link>
                                        </div>
                                    </>
                                )}
                                {auth && (
                                    <>
                                        <div className={`dropdown-content bg-black absolute w-32 rounded-lg h-32 -right-22 ${cla2}`}>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/'>Home</Link>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/post'>Add post</Link>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/allblog'>All post</Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    {auth && (
                        <>
                            <ul className=" flex justify-between mr-8 ml-5 mt-2">
                                <li>
                                    <div className="dropdown relative inline-block">
                                        <button onClick={() => toggleDropdown(setCla)} className="dropbtn cursor-pointer"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width={40} height={40} alt="" /></button>
                                        <div className={`dropdown-content bg-black absolute w-32 rounded-lg -left-20 h-40 ${cla}`}>
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/profile'>Profile</Link>
                                            {/* <Link className="text-white block mt-3 hover:bg-slate-800">Setting</Link> */}
                                            <Link className="text-white block mt-3 hover:bg-slate-800" to='/history'>History</Link>
                                            <button onClick={logout}className="text-white block mt-3 hover:bg-slate-800 ml-10">Logout</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
