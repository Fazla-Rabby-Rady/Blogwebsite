import React from 'react'
import { Link } from 'react-router-dom'
const Post = ({post}) => {
  return (
    <section className='lg:w-[50%] pt-12'>
        <div className="p-10">
            <div className="">
                <div className=" text-center">
                {post.photo && (<img src={post.photo} alt="" className=' rounded-xl object-cover mb-5'/>)}

                {
                    post.categories.map((c)=>(
                        <span className='text-lg font-medium text-red-300 mr-5 font-varelaRound'>{c.name}</span> 
                    ))
                }
                    <img src={ require('../assets/images/n3.jpg')} alt="" 
                        className=' rounded-xl object-cover mb-5 '
                    />
                    <Link to='/post/${post._id}'>
                        <h2 className=' pt-3 text-3xl font-semibold font-josefin'>{post.title}</h2>
                    </Link>
                    {/* <span className='text-lg font-medium text-red-300 mr-5 font-varelaRound'>Music</span> <span className='text-lg font-medium text-red-300 font-varelaRound'>Life</span> */}
                    {/* <h2 className=' pt-3 text-3xl font-semibold font-josefin'>{post.title}</h2> */}
                    <span className=' text-lg font-medium font-lora text-slate-400'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <div className="pt-3">
                    <p className='font-varelaRound'>{post.desc}</p>
                </div>
            </div>   
            
             
        </div>
    </section>
  )
}

export default Post