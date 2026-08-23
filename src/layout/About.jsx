import React from 'react'
import Heading from '../Component/Heading'
import Image from '../Component/Image'
import RoseveltAhmed from '../assets/roseveltAhmed.jpeg'
import Container from '../Component/Container'

const About = () => {
  return (
    <section id="about" className='mt-10 sm:mt-14 pb-10 sm:pb-16'>
      <Container>

        {/* Section Heading */}
        <div className='mb-8 text-center sm:mb-10'>
          <Heading text='About Me' />
        </div>

        {/* About Content */}
        <div className='flex flex-col items-center gap-8 md:flex-row md:gap-10 lg:gap-14'>

          {/* Image */}
          <div className='flex w-full justify-center md:w-1/2'>
            <Image
              className='w-full max-w-[350px] rounded-2xl object-cover shadow-lg sm:max-w-[400px] lg:max-w-[500px]'
              src={RoseveltAhmed}
            />
          </div>

          {/* Content */}
          <div className='flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start'>

            <Heading text='Rosevelt Ahmed' />

            <p className='w-full text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left lg:text-xl lg:leading-8'>
              I am Rosevelt Ahmed, a Digital Marketing Specialist passionate
              about helping businesses grow through Meta Ads, SEO, WordPress,
              Social Media Marketing and data-driven digital strategies. I
              focus on delivering measurable results and long-term business
              growth.
            </p>

            <p className='w-full text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left lg:text-xl lg:leading-8'>
              I am committed to delivering high-quality digital marketing
              solutions tailored to each client’s business goals. By combining
              creativity, strategy and data analysis, I help brands increase
              their online presence, generate quality leads and achieve
              sustainable growth. Client satisfaction and long-term success
              are my top priorities.
            </p>

          </div>

        </div>

      </Container>
    </section>
  )
}

export default About