import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <Container>

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <Heading text="Contact Me" />

          <p className="mt-3 px-4 text-sm leading-6 text-gray-600 sm:text-base">
            Feel free to contact me for any digital marketing project.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-2xl bg-black p-6 text-white">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Let’s Work Together
            </h2>

            <p className="mb-6 leading-7 text-gray-300">
              I help businesses grow through Digital Marketing,
              Social Media Marketing, Meta Ads, SEO and other
              digital marketing strategies.
            </p>

         <a
  href="https://wa.me/8801716115480"
  target="_blank"
  rel="noopener noreferrer"
  className="mb-5 flex items-center gap-4 border-b border-gray-700 pb-5"
>
  <FaWhatsapp className="text-3xl text-green-500" />

  <div>
    <p className="text-sm text-gray-400">WhatsApp</p>
    <p className="font-semibold">+880 1716-115480</p>
  </div>
</a>

<a
   href="https://mail.google.com/mail/?view=cm&fs=1&to=rosevelt2010@gmail.com" target="_blank" rel="noopener noreferrer"
  className="mb-5 flex items-center gap-4 border-b border-gray-700 pb-5"
>
  <MdEmail className="text-3xl text-red-500" />

  <div>
    <p className="text-sm text-gray-400">Email</p>
    <p className="font-semibold">rosevelt2010@gmail.com</p>
  </div>
</a>

            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-semibold">
                Creative IT Institute
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Get In Touch
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              Have a project or business idea? Contact me directly
              through WhatsApp or Email. I will get back to you
              as soon as possible.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">

              <a
                href="https://wa.me/8801716115480"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-500 px-6 py-3 text-center font-semibold text-white hover:bg-green-600"
              >
                WhatsApp Me
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rosevelt2010@gmail.com" target="_blank" rel="noopener noreferrer"
                className="rounded-lg bg-black px-6 py-3 text-center font-semibold text-white hover:bg-gray-800"
              >
                Email Me
              </a>

            </div>
          </div>

        </div>

        {/* Google Map */}
        <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975129.1771337645!2d89.163157078125!3d23.7413449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e1!3m2!1sen!2sbd!4v1787476736216!5m2!1sen!2sbd"
            className="h-[300px] w-full sm:h-[400px] lg:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Creative IT Institute Location"
          />
        </div>

      </Container>
    </section>
  )
}

export default Contact