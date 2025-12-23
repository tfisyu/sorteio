'use client'

import { addParticipant } from '@/actions/actions';
import React, { useState, useRef } from "react";

export default function Form() {
  const buttonRef: { current: null | HTMLButtonElement } = useRef(null);
  const [num, setNum] = useState(0);

  const generateNum = (min: number, max: number) => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };

  const handleClick = () => {
    if (buttonRef.current && !buttonRef.current.disabled) {
      buttonRef.current.disabled = false;
      setNum(generateNum(1, 200));
    };
  }

  return (
    <form
      action={addParticipant}
      className='flex flex-col max-w-[400px] mx-auto gap-2 my-10'
    >
      <input
        type='text'
        name='name'
        placeholder='nome do participante'
        className='border rounded px-3 py-2 text-2xl text-black'
        required
      />
      <button type='submit' className='h-10 bg-red-300 px-5 rounded text-white text-2xl'>
        submit
      </button>
    </form>
  )
}

