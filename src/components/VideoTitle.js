import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-72 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-5xl font-bold w-1/2'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>

      <div>
        <button className='px-8 py-2 font-bold text-black rounded-md bg-white hover:bg-opacity-85'>▶️ Play</button>
        <button className='mx-1 px-6 py-2 font-bold rounded-md bg-gray-500 bg-opacity-50 hover:bg-gray-300 hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle