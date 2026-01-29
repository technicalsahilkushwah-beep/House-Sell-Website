import React from 'react'

const Card = ({image,title}) => {
    return (
        <div className='max-w-[350px] w-full h-[500px] shadow hover:shadow-gray-300 duration-500 hover:shadow-lg'>
            <div className=' aspect-[7/5] w-full shadow overflow-hidden relative'>
                <img src={image} alt="" className='object-cover w-full h-full hover:scale-105 duration-1000 cursor-pointer' />
               {/* shadow overlay  */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className='p-4 flex flex-col gap-2 cursor-pointer '>
                <h2 className='bg-gray-400 w-fit flex px-3 py-1 rounded-2xl text-white text-sm font-bold'>House</h2>
                <p className='text-blue-800 text-sm sm:text-base line-clamp-2'>{title}</p>
                <h3 className='text-gray-600 text-sm flex items-center gap-1'><i className='fa fa-location-dot'></i>Bhopal Bhopal |</h3>
            </div>

            <div>
                {/* Horizontal line  */}
                <hr className='text-gray-300 h-px' />
                <div className='py-2 px-3 text-gray-600 flex flex-wrap gap-x-4 gap-y-2 text-sm'>
                    <button className='flex gap-1 items-center'><i className='fa fa-download'></i>Broucher</button>
                    <button className='flex gap-1 items-center'><i className='fa fa-download'></i>Project Plan</button>
                    <button className='flex gap-1 items-center'><i className='fa fa-earth'></i>Booking</button>
                    <button className='flex gap-1 items-center'><i className='fa fa-download'></i>Advertisement</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card