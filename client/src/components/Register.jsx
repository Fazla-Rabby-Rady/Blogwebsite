import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
        <section className=' w-full h-screen bg-no-repeat bg-cover flex justify-center items-center' style={{backgroundImage:"url(" + require("../assets/images/wood.jpg") +")" }}>
            <div className=" lg:w-[40%] sm:w-[50%] h-[40vh] p-5">
              <form action="">
                  <h1 className=' text-center text-5xl font-bold text-green-500'>Register</h1>
                  <div className=" flex flex-col pt-5">
                    <label htmlFor="" className=' text-white text-xl font-semibold'>Username</label>
                    <input type="text" placeholder='Enter your Username' className=' mt-3 h-12 text-lg font-semibold p-2 rounded-xl outline-none'/>
                    <label htmlFor="" className='mt-4 text-white text-xl font-semibold'>Email</label>
                    <input type="text" placeholder='Enter your Eamil' className=' mt-3 h-12 text-lg font-semibold p-2 rounded-xl outline-none'/>
                    <label htmlFor="" className='mt-4 text-white text-xl font-semibold'>Password</label>
                    <input type="password" placeholder='Enter your password' className='mt-3 h-12 text-lg font-semibold p-2 rounded-xl outline-none' />
                  </div>  

                  <button type="submit" className='p-3 w-32 mt-5 rounded-lg font-semibold mx-[40%] bg-red-600 hover:bg-white hover:text-green-600'>Register</button>
              </form>

              <Link to="/login" className='lg:w-[10rem] text-center bg-green-500 p-3 text-xl font-bold text-white rounded-md absolute right-16 top-36 hover:bg-blue-700'>Login</Link>
            </div>
        </section>
    </>
  )
}

export default Register