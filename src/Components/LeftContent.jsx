import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const LeftContent = () => {
  return (
    <div className="w-[500px] h-[400px] flex flex-col justify-between">
        <h1 className='text-2xl font-mono font-extrabold'>This is design</h1>
        <p className='font-light text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic culpa voluptatibus eos et nobis eligendi deleniti dolor nisi quaerat consequuntur.
        </p>
           <ArrowUpRight size={64}  color='#111'/>

    </div>
  )
}

export default LeftContent
