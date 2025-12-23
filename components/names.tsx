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
      <div className='flex flex-col justify-center items-center h-[92vh] text-4xl gap-3 bg'>
        <div className="glassDiv">
          <h1 className='z-10'>nome do ganhador:</h1>
          <span className='text-8xl z-10 text-[#9191A9]'>
            {winner}
          </span>
          <button onClick={handleClick} className='botao z-10'>sortear</button>
        </div>
        <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
          <defs>
            <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.004 0.004" numOctaves="4" seed="85" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R"
                yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  )
}