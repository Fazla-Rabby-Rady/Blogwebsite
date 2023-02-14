import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const user = false;
  return (
    <>
        <section className=' fixed w-full h-16 bg-white shadow-lg z-50 lg:pt-3 sm:pt-5'>
            <div className=" flex justify-between items-center">
                <div className=" w-1/4 flex justify-center space-x-3 text-2xl font-semibold">
                    <i className="fa-brands fa-facebook text-blue-500"></i>
                    <i className="fa-brands fa-twitter text-blue-500"></i>
                    <i className="fa-brands fa-pinterest text-orange-500"></i>
                    <i className="fa-brands fa-instagram text-orange-600"></i>
                </div>
                <div className=" w-[45%]">
                    <nav className=" space-x-4 flex justify-center lg:text-xl lg:font-semibold sm:text-[1rem] sm:font-medium uppercase">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/write'>Write</Link>
                        {/* <Link to='/logout'>Logout</Link> */}
                        <li className=' list-none'>{user && "LogOut"}</li>
                    </nav>
                </div>
                <div className=" w-[30%] flex sm:space-x-3">
                    <div className="">
                    {
                        user ? (
                            <img src={require('../assets/images/r1.jpg')} alt="" 
                            className=' rounded-full w-10 '
                        />
                        ) : (
                            <nav className='space-x-4 flex justify-center lg:text-xl lg:font-semibold sm:text-[1rem] sm:font-medium uppercase sm:pt-1'>
                                <Link to='/login'>Login</Link>
                                <Link to="/register">Register</Link>
                            </nav>
                        )
                    }
                        
                    </div>
                    <div className=" flex items-center justify-center relative"> 
                        <input type="text" placeholder='Enter Your item' 
                            className=' border border-blue-500 lg:w-[15rem] sm:w-14 mx-2 p-1 rounded-xl pl-8 text-[1.1rem] font-medium'
                        /> 
                        <i className="fa-solid fa-magnifying-glass absolute left-[1rem] text-sm"></i>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Navbar