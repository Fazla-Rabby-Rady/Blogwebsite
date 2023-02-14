import React from 'react'

import Sidebar from './Sidebar'
import SinglePost from './SinglePost'
const Single = () => {
  return (
    <>
        <div className="">
        <div className="w-[100%] pt-12 flex">
          <div className=" lg:w-[75%] sm:w-[65%]">
                <SinglePost />
          </div>
          <div className="lg:w-[25%] sm:w-[35%]">
              <Sidebar />
          </div>
        </div>
        </div>
    </>
  )
}

export default Single