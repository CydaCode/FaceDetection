import React from 'react'

const UrlDetection = () => {
  return (
    <div>
        <p className='p-4 text-center text-yellow text-xl'>{`This is a Face Detection app that detects the face from an image. It dictates by highlighting the face from the images`}</p>

        <div className='w-100 center p-12 shadow-1 m-3 '>
            <div className='p-4 br-3 form shadow-5 center'>
                <input type='text' className='w-70 p-3'/>
                <button className='w-30 dib shadow-1 grow p-3 bg-blue'>Detect</button>
            </div>
        </div>
        
    </div>
  )
}

export default UrlDetection