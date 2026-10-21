import React from 'react'
import Image from 'next/image'
// import img from '@/assets/italy.png'
function About({data}) {
    // console.log(data);
    
  return (
   
<div className="mx-auto flex w-full max-w-[1280px] items-center gap-6 px-6 py-12">
  <div className="w-[65%]">
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

  <div className="w-[35%]">
    <Image
      src={data.image}
      alt={data.image_alt}
      width={600}
      height={400}
      className="h-[200px] w-full rounded-lg object-cover"
      priority
    />
  </div>
</div>

  )
}

export default About