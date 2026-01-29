import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'
import Footer from './Footer'

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <Home />
      <Footer/>
    </div>

  )
}

export default App  