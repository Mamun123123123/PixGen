import React from 'react'

const SiglePhotoDetailsPage = async({params}) => {
    const {id} = await params
    const res = await fetch("https://pix-gen-nine.vercel.app/data.json")
    const datas = await res.json()
    
    const data = datas.find(item => item.id == id)
    console.log(data);
    
    
  return (
     <div className="max-w-4xl mx-auto p-6">
   
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <img
        src={data.imageUrl}
        alt={data.title}
        className="w-full rounded-lg shadow-lg mb-6"
      />

     
      <div className="space-y-3 text-gray-700">
        <p><strong>Prompt:</strong> {data.prompt}</p>
        <p><strong>Category:</strong> {data.category}</p>
        <p><strong>Model:</strong> {data.model}</p>
        <p><strong>Resolution:</strong> {data.resolution}</p>
        <p><strong>Likes:</strong> ❤️ {data.likes}</p>
        <p><strong>Downloads:</strong> ⬇️ {data.downloads}</p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(data.createdAt).toLocaleString()}
        </p>

        
        <div className="flex gap-2 flex-wrap mt-3">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SiglePhotoDetailsPage
