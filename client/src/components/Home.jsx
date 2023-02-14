import React from 'react'
import Posts from './Posts'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Home = () => {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts")
      setPosts(res.data)
      console.log(res.data)
    }
    fetchPosts()
  
  },[])
  return (
    <>
        <section className=' text-center pt-20'>
            <div className="absolute left-[50%]">
                <h4 className='text-xl pt-8 font-semibold font-lora'>React & Node</h4>
                <h3 className='text-6xl font-semibold font-lora'>Blog</h3>
            </div>
            <div className=" pt-24">
                <img src={require('../assets/images/n1.jpg')} alt=""
                className=' w-screen lg:h-[80vh] sm:h-[70vh] object-cover' />
            </div>
        </section>
        <div className="w-[100%] pt-12 flex">
          <div className=" lg:w-[75%] sm:w-[65%]">
              <Posts posts={posts} />
          </div>
          <div className="lg:w-[25%] sm:w-[35%]">
              <Sidebar />
          </div>
        </div>
    </>
  )
}

export default Home