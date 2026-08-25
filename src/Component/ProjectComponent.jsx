import React from 'react'
import Image from './Image'


const ProjectComponent = ({img,text,web,catagory}) => {
  return (
    <>
    <div className='flex flex-col relative'>


        <div className='bg-red-500 w-[300px] h-[200px] shadow-2xl rounded-[20px] '>
<Image className='h-full ' src={img}/>

<p className='text-[20px] text-black  font-bold pb-[20px] pt-4'>{text} <span className='text-[20px] text-black  font-normal'>{catagory}</span></p>

    </div>
     <div className='z-10 w-[300px] h-[200px]  bg-[#4f4f5480] absolute hover:bg-transparent duration-500 flex items-center justify-center'>
   <a href={web} target="blank"> 

    <button
      className='text-sm md:text-base text-white hover:text-black font-bold 
                  bg-[#262626] hover:bg-transparent
                  py-3 px-8 sm:py-4 sm:px-12 md:py-5 md:px-16
                  border border-transparent hover:border-secondary
                  duration-500 '
    >
      View
    </button>
   </a>
     </div>
    </div>
    
     
    </>
  )
}

export default ProjectComponent


// responsiv


// import React from 'react'
// import Image from './Image'
// import Flex from './Flex'
// import Button from './Button'

// const ProjectComponent = ({ img, text, web }) => {
//   return (
//     <Flex className='flex-col relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>

//       <div className='bg-red-500 w-full h-48 sm:h-56 md:h-60 shadow-2xl rounded-2xl overflow-hidden relative'>
//         <Image className='w-full h-full object-cover rounded-2xl' src={img} alt={text} />

//         <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-3 sm:p-4 rounded-b-2xl'>
//           <p className='text-base sm:text-lg md:text-xl text-black font-dm font-bold'>{text}</p>
//         </div>
//       </div>

//       <div className='z-10 w-full h-48 sm:h-56 md:h-60 bg-[#4f4f5480] absolute top-0 left-0 rounded-2xl hover:bg-transparent duration-500 flex items-center justify-center'>
//         <a href={web} target='_blank' rel='noopener noreferrer'>
//           <Button text='View' />
//         </a>
//       </div>

//     </Flex>
//   )
// }

// export default ProjectComponent
