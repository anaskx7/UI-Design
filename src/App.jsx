import React from 'react'
import Section from './Components/Section'
import cardData from './Components/CardData'

const App = () => {
const user = cardData;

  return (
   <div>
    <Section user={user}/>
   </div>
  )
}

export default App
