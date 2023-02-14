import React from 'react'

const Write = () => {
  return (
    <>
        <section className='pt-20 w-full'>
            <div className=" p-20">
                <img src={require ('../assets/images/n4.jpg')} alt="" 
                    className='h-[60vh] object-cover rounded-lg'
                />

                <form action="" className=' space-y-8'>
                    <div className=" pt-10 pl-3">
                        <label htmlFor="fileInput"><i className="fa-solid fa-plus cursor-pointer text-3xl font-bold p-1 text-gray-500 ring-2 ring-gray-400 rounded-full"></i></label>
                        <input type="file" name="" id="fileInput" className=' hidden' />
                        <input type="text" placeholder=' Title' autoFocus={true}
                            className='lg:w-[80%] sm:w-[65%] h-[8vh] ml-5 text-2xl font-semibold pl-3 capitalize focus:outline-none'
                        />
                    </div>
                    <div className="">
                        <textarea placeholder='Tell your story......' type="text"
                            className='w-[100%] min-h-[20vh] text-2xl font-semibold pl-5 focus:outline-none'
                        ></textarea>
                    </div>

                    <button type="submit" className=' p-3 rounded-xl overflow-hidden bg-green-700 text-xl font-semibold text-white absolute right-24 top-[85vh]'>Publish</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Write