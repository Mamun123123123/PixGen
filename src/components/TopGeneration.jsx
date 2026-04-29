import React from 'react'
import PhotoCart from './PhotoCart'

const TopGeneration = async() => {
    const res = await fetch("https://pix-gen-nine.vercel.app/data.json")
    const data = await res.json()
    // console.log(data);
    const topPhotos = data.slice(0,8)
    console.log(topPhotos);
    
    
  return (
    <div>
      <h1 className='text-2xl font-bold mt-5'>Top Image Generations</h1>
      <div className='grid grid-cols-4 gap-5'>
        {topPhotos.map(photo => <PhotoCart key={photo.id} photo ={photo}/> )}
      </div>
    </div>
  )
}

export default TopGeneration
