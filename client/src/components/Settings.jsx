import React from 'react'
import Sidebar from './Sidebar'

const Settings = () => {
  return (
    <>
        <section className='pt-5 w-full flex'>
            <div className="lg:w-[75%] sm:w-[65%] pt-20 p-10">
                <div className=" flex items-center justify-between">
                    <h3 className='text-2xl font-bold font-varelaRound text-red-600'>Update Your Account</h3>
                    <h3 className='text-lg font-bold font-varela text-red-600 '>Delate Account</h3>
                </div>
                <form action="" className=' space-y-5'>
                    <h2 className=' text-xl font-semibold  pt-5'>Profile Picture</h2>
                    <div className=" flex items-center space-x-5">
                        <img src={require('../assets/images/r1.jpg')} alt="" 
                            className=' lg:w-[10%] sm:w-[15%] rounded-xl'
                        />
                        <label htmlFor="fileId"><i class="fa-regular fa-circle-user text-3xl text-red-500 cursor-pointer"></i></label>
                        <input type="file" id="fileId" className=' hidden' />     
                    </div>

                    <div className=" flex flex-col">
                        <label htmlFor="" className=' mt-4 text-xl font-bold text-gray-500'>Username</label>
                            <input type="text"  className=' mt-2 h-10 text-lg p-2 outline-none border-b-2' placeholder='Enter your Fullname'/>
                        <label htmlFor="" className=' mt-5 text-xl font-bold text-gray-500'>Email</label> 
                            <input type="email" placeholder='Enter Email' className=' mt-2 h-10 text-lg p-2 outline-none border-b-2' />
                        <label htmlFor="" className='mt-5 text-xl font-bold text-gray-500'>Password</label>
                            <input type="password" placeholder='Enter password' className=' mt-2 h-10 text-lg p-2 outline-none border-b-2' />
                    </div> 
                        <button type="submit" className=' border border-gray-500 mx-[50%] p-2 bg-green-600 rounded-xl  text-xl font-semibold text-white'>Update</button>
                </form>
            </div>
            <div className="lg:w-[25%] sm:w-[35%]">
                <Sidebar />
            </div>
        </section>
    </>
  )
}

export default Settings