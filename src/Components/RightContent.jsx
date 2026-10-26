import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (
 <div className=" w-2/3 p-6 flex flex-nowrap overflow-x-auto  gap-3  scrollbar-none"> 
   {props.user.map((user,id)=>{
    return <Card key={id} user={user}/>
   })}
 
 </div>
  )
}

export default RightContent
