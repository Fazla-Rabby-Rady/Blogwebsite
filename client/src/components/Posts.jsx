import React from 'react'
import Post from './Post'
const Posts  = ({posts}) => {

  return (
      <div className='w-[100%] min-h-screen'>
          <div className=" pt-10 flex flex-wrap">
              {
                posts.map((p)=>(
                    <Post post={p}/>
                ))
              }
              
          </div>
      </div>
   
    
  )
}

export default Posts