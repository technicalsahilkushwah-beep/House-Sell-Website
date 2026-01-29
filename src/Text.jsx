import React from 'react'
import Card3 from './Card3'

const Using = [
  {
    image:"https://www.mphousing.in/Upload/15473919082023154739Hos%20ITI.png"
  },
  {
    image:"https://www.mphousing.in/Upload/15241419082023152414REWA.png"
  },
  {
    image:"https://www.mphousing.in/Upload/15160319082023151603bhind.png"
  }
]

const Text = () => {
  return (
    <div className="max-w-[1200px] text-center mx-auto sm:text-sm md:text-base lg:text-lg leading-7 text-base text-gray-800 ">
      MPHIDB are pioneers in construction of Housing and Commercial projects in
      Real Estate sectors. In addition to this, MPHIDB also works as supervising
      authority for execution of construction works of other Government
      Departments who do not have expertise in construction works. These works
      are termed as deposit works.

      

      <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {Using.map((Card4)=>{
          return <Card3 image={Card4.image}/>
        })}
      </div>
    </div>
  )
}

export default Text
