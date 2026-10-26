import React from 'react'
import { ArrowRight } from 'lucide-react';

const Card = (props) => {
  return (
    <div className='h-full shrink-0 w-80  rounded-4xl overflow-x-auto relative'>
      <img className='h-full w-full object-cover' src={props.user.image} alt="" />
     <div className='  h-full w-full top-0 left-0 absolute px-0 py-2 flex flex-col justify-between items-center gap-5 text-left'>
       <p className='bg-white w-10 h-10 rounded-full flex justify-center items-center font-semibold self-start m-2 '>{props.user.id}</p>

       
       <p className={`hover:font-black font-semi-bold ${props.user. textColor} leading-normal cursor-pointer font-serif `}>{props.user.description}</p>
       <div className='flex mt-3'>
        <button className={`${props.user.buttonColor} text-white px-3 py-0.5  rounded-full`}>{props.user.status}</button>
        <button className={`${props.user.buttonColor} text-white px-1  rounded-full`}></button>
        <button className={`${props.user.buttonColor} text-white px-3 py-0.5  rounded-full`}>  <ArrowRight size={20} /></button>
     </div>
     </div>
     
    </div>
  )
}

export default Card
