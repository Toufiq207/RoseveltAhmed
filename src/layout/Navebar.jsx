import React, { useState } from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Logo from '../assets/logo.png'

const Navebar = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Service', link: '#service' },
    { name: 'Faq', link: '#faq' },
     { name: 'Skills', link: '#skills' },
     { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
   
  ]

  const handleMenuClick = (e, link) => {
    e.preventDefault()
    setOpen(false)

    const section = document.querySelector(link)

    if (section) {
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar?.offsetHeight || 90

      const heading = section.querySelector('h1, h2, h3')

      const target = heading || section

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        10

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className='fixed left-0 top-0 z-50 w-full bg-gray-900 py-0  sm:py-4 '>
      <Container className='relative flex h-[90px] items-center justify-between'>

        {/* Logo */}
        <a
          href='#home'
          onClick={(e) => handleMenuClick(e, '#home')}
        >
          <Image
            className='w-[50px] rounded-full sm:w-[90px] lg:w-[110px]'
            src={Logo}
          />
        </a>

        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-6 xl:gap-10'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={(e) => handleMenuClick(e, item.link)}
                  className='text-lg font-normal text-white transition hover:font-bold xl:text-2xl'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className='text-3xl text-white lg:hidden'
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className='absolute left-0 top-full z-50 w-full bg-gray-900 px-5 pb-5 shadow-lg lg:hidden'>
            <ul className='flex flex-col gap-2'>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className='border-b border-gray-700 py-2'
                >
                  <a
                    href={item.link}
                    onClick={(e) => handleMenuClick(e, item.link)}
                    className='block text-lg text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </Container>
    </nav>
  )
}
export default Navebar