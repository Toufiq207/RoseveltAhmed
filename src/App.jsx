
import React from 'react'
import Hero from './layout/Hero'
import About from './layout/About'
import Service from './layout/Service'
import Contact from './layout/Contact'
import Faq from './layout/Faq'
import Navebar from './layout/Navebar'

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Service/>
      <Faq/>
      <Contact/>
    </div>
  )
}

export default App