import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Section = (props) => {

  return (
    <div className='w-screen h-screen p-8  '>
   <Navbar/>
   <Content user={props.user}/>
    </div>
  )
}

export default Section
