import React from 'react'

const Heading = ({className,text}) => {
  return (
    <h1 className={`text-4xl font-bold text-center ${className}`}>{text}</h1>
  )
}

export default Heading