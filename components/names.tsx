'use client'

import React, { useState } from 'react'

export default function TheWinnerName({ winnerName }: any) {
  const [winner, setWinner] = useState('')
  const array = winnerName
  function randomName(array: Array<string>) {
    const randomElement = array[Math.floor(Math.random() * array.length)]
    return randomElement;
  }
  function handleClick() {
    setWinner(randomName(array))
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center h-[90vh] text-4xl gap-3'>
        <div className='flex flex-col justify-between items-center gap-6 text-5xl p-14 bg-white rounded-xl w-[50vw] h-[60vh] opacity-60'>
          <h1 className='bg-white'>nome do ganhador:</h1>
          <span className='text-pink-400 bg-white'>
            {winner}
          </span>
          <button onClick={handleClick} className='border-dashed border-2 border-black py-2 px-3 rounded-md'>sortear</button>
        </div>
      </div>
    </>
  )
}