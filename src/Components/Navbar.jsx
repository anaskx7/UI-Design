import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center up">
      <div className='bg-black text-white font-mono px-4 py-2 rounded-xl border-0 hover:scale-[1.05] tracking-wider uppercase'>
        <h2>Targeted audience</h2>
      </div>
     <button className="bg-gray-300 hover:scale-[1.05] px-4 py-2 rounded-2xl font-sans tracking-wider uppercase ">Digital marketing Platform</button>
    </div>
  )
}

export default Navbar
