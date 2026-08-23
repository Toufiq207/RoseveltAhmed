import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'

const Contact = () => {
  return (
    <section className='mt-10 sm:mt-14 pb-10 sm:pb-16' id='contact'>
      <Container>

        {/* Heading */}
        <div className='mb-8 sm:mb-10 text-center'>
          <Heading text='Contact Me' />

          <p className='mt-3 px-4 text-sm leading-6 text-gray-600 sm:text-base'>
            Feel free to contact me for any digital marketing project.
          </p>
        </div>

        {/* Contact Information */}
        <div className='grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8'>

          {/* Left Side */}
          <div className='rounded-2xl bg-black p-5 text-white shadow-xl sm:p-7 lg:p-8'>

            <h2 className='mb-4 text-2xl font-bold sm:text-3xl'>
              Let’s Work Together
            </h2>

            <p className='mb-7 text-sm leading-6 text-gray-300 sm:mb-8 sm:text-base sm:leading-7'>
              I help businesses grow through Digital Marketing,
              Social Media Marketing, Meta Ads, SEO and other
              digital marketing strategies.
            </p>

            {/* WhatsApp */}
            <a
              href='https://wa.me/8801716115480'
              target='_blank'
              rel='noopener noreferrer'
              className='mb-5 flex items-center gap-3 border-b border-gray-700 pb-5 transition hover:text-green-400 sm:gap-4'
            >
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-lg sm:h-12 sm:w-12 sm:text-xl'>
                ☎
              </div>

              <div className='min-w-0'>
                <p className='text-xs text-gray-400 sm:text-sm'>
                  WhatsApp
                </p>

                <p className='text-sm font-semibold sm:text-base'>
                  +880 1716-115480
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href='mailto:rujvelt@gmail.com'
              className='mb-5 flex items-center gap-3 border-b border-gray-700 pb-5 transition hover:text-blue-400 sm:gap-4'
            >
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg sm:h-12 sm:w-12 sm:text-xl'>
                ✉
              </div>

              <div className='min-w-0'>
                <p className='text-xs text-gray-400 sm:text-sm'>
                  Email
                </p>

                <p className='break-all text-sm font-semibold sm:text-base'>
                  rujvelt@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500 text-lg sm:h-12 sm:w-12 sm:text-xl'>
                📍
              </div>

              <div>
                <p className='text-xs text-gray-400 sm:text-sm'>
                  Location
                </p>

                <p className='text-sm font-semibold sm:text-base'>
                  Creative IT Institute
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className='flex flex-col justify-center rounded-2xl bg-gray-50 p-5 shadow-xl sm:p-7 lg:p-8'>

            <h2 className='mb-4 text-2xl font-bold sm:mb-5 sm:text-3xl'>
              Get In Touch
            </h2>

            <p className='mb-7 text-sm leading-6 text-gray-600 sm:mb-8 sm:text-base sm:leading-7'>
              Have a project or business idea? Contact me directly
              through WhatsApp or Email. I will get back to you as
              soon as possible.
            </p>

            {/* Buttons */}
            <div className='flex flex-col gap-3 xs:flex-row sm:flex-row sm:gap-4'>

              <a
                href='https://wa.me/8801716115480'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-lg bg-green-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-600 sm:px-6 sm:text-base'
              >
                WhatsApp Me
              </a>

              <a
                href='mailto:rujvelt@gmail.com'
                className='rounded-lg bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800 sm:px-6 sm:text-base'
              >
                Email Me
              </a>

            </div>

          </div>

        </div>

        {/* Google Map */}
        <div className='mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-xl sm:mt-10'>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975129.1771337645!2d89.163157078125!3d23.7413449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e1!3m2!1sen!2sbd!4v1787476736216!5m2!1sen!2sbd'
            className='h-[280px] w-full sm:h-[350px] lg:h-[450px]'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='strict-origin-when-cross-origin'
            title='Creative IT Institute Location'
          ></iframe>

        </div>

      </Container>
    </section>
  )
}

export default Contact

