import React from 'react'
import Home2 from './Home2'
import Card2 from './Card2'
import HorizontalLine from './HorizontalLine'
import Text from './Text'
const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">

      {/* Banner */}
      <div className="max-w-full h-[560px] md:h-full lg:h-full shadow shadow-gray-400 overflow-hidden">
        <img
          src="https://www.mphousing.in/logo/nobanner.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Other section */}
      <Home2 />

      {/* Horizontel Lines  */}

      <div className='mt-32'>
        <HorizontalLine name="What We DO" />
        <HorizontalLine name="DEPOSIT WORKS" />
        <div className='m-5 '>
          <Text />
        </div>
      </div>

    </main>
  )
}

export default Home
