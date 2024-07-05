import React from 'react'

const ClientCard = ({img,para,heading}) => {
  return (
    <center className='w-72 rounded-md shadow-lg p-8 m-2 hover:scale-105 hover:transition-transform'>
        <img className='size-16' src={img} size={48} />
        <h1 className='text-3xl font-bold align-center'>{heading}</h1>
        <p className='text-sm m-2'>{para}</p>
    </center>
  )
}

export default ClientCard