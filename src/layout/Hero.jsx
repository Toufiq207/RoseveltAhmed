import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Banner from '../assets/banner.png'
import Facebook from '../assets/facebook.png'
import Tiktok from '../assets/tiktok.png'
import Linkdin from '../assets/linkedin.jpg'

const Hero = () => {
  return (
    <section id='home' className='pt-[90px]'>
      <Container>
        <Image src={Banner} />

        <div className='mt-8 flex items-center justify-center gap-4'>
          <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Facebook}
          />

          <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Tiktok}
          />

          <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Linkdin}
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero