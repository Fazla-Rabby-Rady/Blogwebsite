import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
        <section className='lg:pr-6 pt-20 z-10'>
            <div className="bg-slate-50 lg:w-[95%] ml-3">
                <div className=" flex flex-col items-center pt-5">
                    <h2 className=' text-xl font-semibold border-b-[.2rem] border-t-[.2rem] border-orange-300  w-[12rem] text-center pt-2 pb-2'>About me</h2>
                    <img src={require('../assets/images/r3.jpg')} alt="" 
                        className=' w-[12rem] pt-3'
                    />
                    <p className=' pt-5 text-[1rem] text-gray-600 text-left lg:pl-3 sm:pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste velit facere sequi dignissimos, sint praesentium labore eligendi eius laborum.</p>
                </div>
                <div className=" flex flex-col items-center pt-5 space-y-3">
                    <h2 className='text-xl font-semibold border-b-[.2rem] border-t-[.2rem] border-orange-300  w-[12rem] text-center pt-2 pb-2'>Categories</h2>
                    <div className='text-lg font-semibold flex  space-x-10'>
                        <div className=" flex flex-col">
                            <Link to=''>Life</Link>
                            <Link to=''>Music</Link>
                            <Link to=''>Style</Link>
                        </div>
                        <div className=" flex flex-col">
                            <Link to=''>Sport</Link>
                            <Link to=''>Tech</Link>
                            <Link to=''>Cinema</Link>
                        </div>
                        
                    </div>
                </div>
                <div className=" flex flex-col items-center pt-5 pb-3">
                    <h2 className='text-xl font-semibold border-b-[.2rem] border-t-[.2rem] border-orange-300  w-[12rem] text-center pt-2 pb-2'>Follow us</h2>
                    <div className=" text-2xl font-bold space-x-3 pt-5">
                        <i className="fa-brands fa-facebook text-blue-500"></i>
                        <i className="fa-brands fa-twitter text-blue-500"></i>
                        <i className="fa-brands fa-pinterest text-orange-500"></i>
                        <i className="fa-brands fa-instagram text-orange-600"></i>
                    </div>
                </div>
            </div>
        </section>

        
    </>
  )
}

export default Sidebar