
import React from 'react'
import Hero from './layout/Hero'
import About from './layout/About'
import Service from './layout/Service'
import Contact from './layout/Contact'
import Faq from './layout/Faq'
import Navebar from './layout/Navebar'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Service/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App