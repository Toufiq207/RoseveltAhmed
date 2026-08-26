import React from 'react'
import Heading from '../Component/Heading'
import Image from '../Component/Image'
import RoseveltAhmed from '../assets/roseveltAhmed.jpeg'
import Container from '../Component/Container'

const About = () => {
  return (
    <section
      id="about"
      className="mt-10 scroll-mt-[90px] pb-10 sm:mt-14 sm:pb-16"
      aria-labelledby="about-heading"
    >
      <Container>

        {/* Section Heading */}
        <div
          id="about-heading"
          className="mb-8 text-center sm:mb-10"
        >
          <Heading text="About Rosevelt Ahmed" />
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10 lg:gap-14">

          {/* Profile Image */}
          <div className="flex w-full justify-center md:w-1/2">
            <Image
              src={RoseveltAhmed}
              alt="Rosevelt Ahmed - Digital Marketing Specialist in Bangladesh"
              className="w-full max-w-[350px] rounded-2xl object-cover shadow-lg sm:max-w-[400px] lg:max-w-[500px]"
            />
          </div>

          {/* About Content */}
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start">

            {/* Name / Subheading */}
            <Heading text="Rosevelt Ahmed" />

            <p className="w-full text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left lg:text-xl lg:leading-8">
              I am Rosevelt Ahmed, a Digital Marketing Specialist
              specializing in Meta Ads, SEO, Social Media Marketing,
              WordPress and data-driven digital marketing strategies.
              I help businesses build a stronger online presence,
              generate quality leads and achieve measurable business
              growth.
            </p>

            <p className="w-full text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left lg:text-xl lg:leading-8">
              I provide customized digital marketing solutions based
              on each client's business goals. By combining creative
              content, strategic marketing, paid advertising and data
              analysis, I help brands increase their online visibility,
              improve customer engagement and achieve sustainable
              growth.
            </p>

            <p className="w-full text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left lg:text-xl lg:leading-8">
              My goal is to deliver practical and results-driven digital
              marketing solutions while building long-term relationships
              with clients.
            </p>

          </div>

        </div>

      </Container>
    </section>
  )
}

export default About