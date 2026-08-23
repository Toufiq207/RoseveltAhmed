import React from 'react'

const ServiceComponent = ({heading,delails}) => {
  return (
    <div>
        <p className='text-xl text-black font-bold'>{heading}</p>
        <p className='text-xl text-gray-500 font-normal'>{delails}</p>

    </div>
  )
}

export default ServiceComponent