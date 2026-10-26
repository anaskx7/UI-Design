import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='flex justify-between pt-6'>
    <LeftContent/>
    <RightContent user={props.user}/>
    </div>
  )
}

export default Content
