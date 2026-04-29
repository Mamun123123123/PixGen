import { Card } from '@heroui/react'
import Image from 'next/image'
import React from 'react'
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from "react-icons/fa";
const PhotoCart = ({photo}) => {
  return (
    <Card className='border rounded-xl'>
      <div className='relative w-full aspect-square'>
        <Image src={photo.imageUrl}
        
        fill className='object-cover rounded-xl' alt={photo.title}/>
      <chip className="absolute right-2 top-2 text-white border rounded-full p-1 bg-black">{photo.category}</chip></div>
      <div>
        <h2 className='font-medium'>{photo.title}</h2>
      </div>
     <div className='flex justify-between'>
         <div className='flex gap-1 items-center'>
        <p><FaHeart /></p>
        <p>{photo.likes}</p></div>
        <div className='flex gap-1 items-center'>
        <p><BiDownload /></p>
        <p>{photo.downloads}</p></div>
     </div>
     <button variant='outline' className=' border  rounded-3xl p-1 w-full'>View</button>
    </Card>
  )
}

export default PhotoCart
