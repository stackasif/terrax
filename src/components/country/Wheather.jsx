import React from 'react'
import Image from 'next/image'

function Wheather({data}) {
    const imgData=data.seasons[0]

  return (
    
    <section className='w-full bg-cyan-50'>
        <div className="mx-auto flex w-full max-w-[1280px]  items-center gap-6 px-6 py-5">
      <div className="w-[55%]">
        <div className="mb-2 flex items-center gap-4">
          <span className="h-[2px] w-5 bg-red-500" />
          <span className="text-[12px] font-semibold uppercase tracking-[2px] text-red-500">
            {data.eyebrow}
          </span>
        </div>
    
        <h2 className="mb-2 text-3xl font-bold leading-tight text-gray-900">
          {data.title}
        </h2>
    
        <p className="text-[13px] leading-[1.5] text-gray-700">
          {data.paragraph}
        </p>
      </div>
    
      <div className="w-[45%] gap-2 flex">
         {data.seasons.map((season, index) => (
          <div
            key={ index}
            className="min-w-0 flex-1 overflow-hidden rounded-lg bg-white shadow-sm"
          >
            <Image
              src={season.image}
              alt={season.image_alt}
              width={200}
              height={240}
              className="h-[100px] w-full object-cover"
            />

            <div className="px-1 py-2 text-center">
              <h3 className="text-xs font-bold text-gray-900">
                {season.title}
              </h3>
              <p className="text-[10px] text-gray-600">
                {season.months}
              </p>
            </div>
          </div>
        ))}

       
      </div>
    </div>
    </section>
  )
}

export default Wheather