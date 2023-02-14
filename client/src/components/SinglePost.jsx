import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({})
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('http://localhost:5000/api/posts'+path)
            setPost(res.data)
        }
        getPost()
    },[path])
  return (
    <>
        <section className=' pt-12'>
            <div className=" p-10 space-y-5">
            {
                post.photo && (
                    <img src={require('../assets/images/n2.jpg')} alt="" 
                    className=' w-full lg:h-[80vh] sm:h-[50vh] rounded-xl'
                />
                )
            }
                {/* <img src={require('../assets/images/n2.jpg')} alt="" 
                    className=' w-full lg:h-[80vh] sm:h-[50vh] rounded-xl'
                /> */}
                <div className=" flex">
                    <h1 className=' w-[80%] text-3xl font-bold font-varela text-center'>Post Heading or Tittle</h1>
                    <div className=" w-[20%] text-center space-x-4">
                        <i className="fa-solid fa-pen-to-square text-2xl font-bold text-green-500"></i>
                        <i className="fa-solid fa-trash-can text-2xl font-bold text-red-500"></i>
                    </div>

                </div>

                <div className=" flex items-center justify-between">
                    <h3 className=' text-lg font-semibold font-varelaRound text-yellow-700'>Author: <span className=' text-yellow-600'>Sakil</span></h3>
                    <p className=' text-lg font-semibold font-varelaRound text-yellow-400'>1 hour ago</p>
                </div>
                <div className=" text-lg font-medium font-varelaRound text-gray-600">
                    <p className=' first-letter:text-3xl first-letter:font-extrabold first-letter:ml-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus similique, rerum, a iure aliquid eaque repellendus modi eveniet sed nihil inventore, pariatur minus. Laborum eveniet, eum quia porro minima aspernatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, nostrum. Vitae, iste delectus pariatur aliquid quasi minima, temporibus, recusandae facilis ratione voluptas laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus repellendus voluptate eius sit ipsum mollitia perferendis tempore aperiam eveniet. laboriosam culpa doloribus quo? Voluptatibus, assumenda nobis?</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default SinglePost