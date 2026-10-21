import React from 'react'
import Image from "next/image";


function Food({data}) {
    // console.log(data);
    
  return (

    <section className=" px-6 py-12">
      <div className="mx-auto max-w-[1280px] ">
       
       <div className='w-[60%]  px-6'>
            <div className="flex items-center gap-3">
                <span className="h-[2px] w-5 bg-red-500" />
                <p className="text-[12px] font-semibold uppercase tracking-[2px] text-red-500">
                    {data.eyebrow}
                </p>
            </div>

        
            <h2 className="mb-2 text-3xl font-bold leading-tight text-gray-900">
            {data.title}
            </h2>

        
                <p className="text-[13px] leading-[1.5] text-gray-700">
                {data.paragraph}
                </p>
        </div>

        
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 px-6 ">
          
            {
                data.dishes.map((item)=>(
                    <div key={item.title} className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md cursor-pointer" >
                        <div className="relative h-44 w-full" >
                            <Image
                            src={item.image}
                            alt={item.image_alt}
                            width={600}
                            height={400}
                            className="h-[176px] w-full rounded-lg object-cover"
                            />
                        </div>

                        <div className="p-3">
                            <h3 className="font-semibold leading-[1.5] text-gray-900">{item.title}</h3>
                            <p className="text-[12px] mt-1 leading-[1.5] text-gray-700">{item.description}</p>
                        </div>
                    </div>
                ))
            }
          
        </div>
      </div>
    </section>
  
   
  )
}

export default Food;