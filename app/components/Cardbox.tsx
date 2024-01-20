import React from 'react'
import Card from './Card'

const Cardbox = () => {
  return (
    <div className=' w-full    py-4 h-full bg-white flex  justify-center flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Cardbox