import React from 'react'


const Card = ({course}) => {
  return (
    <div className='z-10 bg-[#E9F8F3B2] h-[450px] drop-shadow-md overflow-hidden rounded-2xl mr-2 mt-8 my-4 ml-2 '>
        <img src={course.linkImg} 
                className=" w-3/4 pt-5 flex mx-auto"
        
        />
        <div className='p-5'>
            <h1 className='py-2 text-3xl'>{course.title}</h1>
            <h1 className='py-2 '>{course.category}</h1>
        </div>

        {/* <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {}
        </div> */}
    </div>
  )
}

export default Card