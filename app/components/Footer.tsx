import React from 'react'
import { Instrument_Sans } from 'next/font/google'

const instrument = Instrument_Sans();

const Footer = () => {
  return (
    <div className='font-instrument font-normal md:text-md py-10 text-black text-center'>
      Muhammad | All Rights Reserved. 2024
    </div>
  )
}

export default Footer
