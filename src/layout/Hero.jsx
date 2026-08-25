import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Banner from '../assets/banner.png'
import Facebook from '../assets/facebook.png'
import Tiktok from '../assets/tiktok.png'
import Linkdin from '../assets/linkedin.jpg'
import Instagram from '../assets/instagram.png'
const Hero = () => {
  return (
    <section id='home' className='pt-[90px]'>
      <Container>
        <Image src={Banner} />

        <div className='mt-8 flex items-center justify-center gap-6'>
         <a href="https://www.facebook.com/Growthupbd.info/" target='blank'>
          <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Facebook}
          />
         </a>

          <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Tiktok}
          />

          <a href="https://www.linkedin.com/in/roseveltahmed/" target='blank'>
            <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Linkdin}
          />

          </a>
         <a href="https://www.instagram.com/growthupbdinfo1/" target='blank'>
           <Image
            className='w-[50px] sm:w-[60px] lg:w-[70px]'
            src={Instagram}
          />
         </a>
        </div>
      </Container>
    </section>
  )
}

export default Hero