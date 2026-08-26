import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Smooth scroll function
  const handleFooterClick = (e, link) => {
    e.preventDefault()

    const section = document.querySelector(link)

    if (section) {
      // Navbar height বের করা
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar?.offsetHeight || 90

      // Section-এর heading খোঁজা
      const heading = section.querySelector('h1, h2, h3')

      // Heading থাকলে heading, না থাকলে section
      const target = heading || section

      // Scroll position calculate
      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        10

      // Smooth scroll
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">

      <Container>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Logo & About */}
          <div className="text-center lg:text-left">

            <a
              href="#home"
              onClick={(e) =>
                handleFooterClick(e, '#home')
              }
              className="flex justify-center lg:justify-start"
            >
              <Image
                src={Logo}
                className="w-[80px] rounded-full sm:w-[100px]"
              />
            </a>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              I am Rosevelt Ahmed, a Digital Marketing
              Specialist helping businesses grow through
              Social Media Marketing, Meta Ads, SEO and
              data-driven digital strategies.
            </p>

          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">

            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {/* Home */}
              <li>
                <a
                  href="#home"
                  onClick={(e) =>
                    handleFooterClick(e, '#home')
                  }
                  className="text-gray-400 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              {/* About */}
              <li>
                <a
                  href="#about"
                  onClick={(e) =>
                    handleFooterClick(e, '#about')
                  }
                  className="text-gray-400 transition hover:text-white"
                >
                  About
                </a>
              </li>

              {/* Services */}
              <li>
                <a
                  href="#service"
                  onClick={(e) =>
                    handleFooterClick(e, '#service')
                  }
                  className="text-gray-400 transition hover:text-white"
                >
                  Services
                </a>
              </li>

              {/* FAQ */}
              <li>
                <a
                  href="#faq"
                  onClick={(e) =>
                    handleFooterClick(e, '#faq')
                  }
                  className="text-gray-400 transition hover:text-white"
                >
                  FAQ
                </a>
              </li>

              {/* Contact */}
              <li>
                <a
                  href="#contact"
                  onClick={(e) =>
                    handleFooterClick(e, '#contact')
                  }
                  className="text-gray-400 transition hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div className="text-center lg:text-left">

            <h3 className="mb-5 text-xl font-bold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Social Media Marketing</li>
              <li>Meta Ads</li>
              <li>SEO</li>
              <li>Content Marketing</li>
              <li>Digital Marketing</li>
            </ul>

          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">

            <h3 className="mb-5 text-xl font-bold">
              Contact Me
            </h3>

            <div className="space-y-4 text-sm">

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801716115480"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 transition hover:text-green-400"
              >
                WhatsApp
                <br />

                <span className="font-semibold text-white">
                  +880 1716-115480
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:rujvelt@gmail.com"
                className="block break-all text-gray-400 transition hover:text-blue-400"
              >
                Email
                <br />

                <span className="font-semibold text-white">
                  rujvelt@gmail.com
                </span>
              </a>

              {/* Location */}
              <p className="text-gray-400">
                Location
                <br />

                <span className="font-semibold text-white">
                  Creative IT Institute
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">

            <p className="text-sm text-gray-400">
              © {currentYear} Rosevelt Ahmed.
              All Rights Reserved.
            </p>

            <p className="text-sm text-gray-500">
              Digital Marketing Specialist
            </p>

          </div>

        </div>

      </Container>

    </footer>
  )
}

export default Footer