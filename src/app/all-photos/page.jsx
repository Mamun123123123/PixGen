import PhotoCart from '@/components/PhotoCart'
import React from 'react'

const AllPhotosPage = async() => {
      const res = await fetch("https://pix-gen-nine.vercel.app/data.json")
    const data = await res.json()
  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>All Photos</h1>
      <div className='grid grid-cols-4 gap-4'>
        {data.map(photo => <PhotoCart key={photo.id} photo={photo} />)}
      </div>
    </div>
  )
}

export default AllPhotosPage
