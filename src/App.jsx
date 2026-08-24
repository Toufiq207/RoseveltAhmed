
import React from 'react'
import Hero from './layout/Hero'
import About from './layout/About'
import Service from './layout/Service'
import Contact from './layout/Contact'
import Faq from './layout/Faq'
import Navebar from './layout/Navebar'
import Footer from './layout/Footer'
import Skill from './layout/Skill'
import Experience from './layout/Experience'
import Project from './layout/Project'

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Service/>
      <Faq/>
      <Skill/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App