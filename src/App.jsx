
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

      {/* Navigation */}
      <Navebar />

      {/* Main Content */}
      <main>

        {/* Home / Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Services */}
        <section id="service">
          <Service />
        </section>

        {/* FAQ */}
        <section id="faq">
          <Faq />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skill />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Projects */}
        <section id="project">
          <Project />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App