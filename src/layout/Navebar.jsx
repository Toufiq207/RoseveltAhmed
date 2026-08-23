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
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <nav className='bg-gray-900 fixed w-full  '>
      <Container className='relative flex items-center justify-between py-3 sm:py-4'>

        {/* Logo */}
        <a href='#home'>
          <Image
            className='w-[100px] rounded-full sm:w-[130px] lg:w-[150px]'
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
                  className='text-lg font-normal text-white transition hover:font-bold xl:text-2xl'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
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
                    onClick={() => setOpen(false)}
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