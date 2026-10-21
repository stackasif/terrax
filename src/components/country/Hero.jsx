import img from '@/assets/earth.png'
import flag from '@/assets/flag.png'
import Image from 'next/image'
import {MoveRight,MapPin,BookA,Globe } from 'lucide-react'
import Link from 'next/link'
// import japan from '@/data/japan.json'
import React from 'react'



export default function Hero({ data }) {
  
// console.log(data);

  return ( 
  <section className="relative h-[450px] w-full overflow-hidden">
          <Image
            src={data.background_image}
            alt={data.background_image_alt}
             fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 z-10 bg-black/20">
            <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col items-start justify-center px-4 pb-2 text-white">
              <div>
                <Image src={data.flag}
                      width={40}
                      height={20}
                      className="w-10 h-8 object-cover shrink-0 ml-1"
                      alt="flag"/>
              </div>

              <div>
                    <h1 className="text-[60px] leading-none my-2 font-semibold">
                    {data.country_name}
                    </h1>
                    <p className=' text-[14px]'>
                    <span >{data.country_name_native}</span> <br /> {data.tagline}
                    </p>
              </div>
              <div className='flex gap-4 items-center text-[12px] my-5'>
                    <div className='flex items-center gap-2'>
                        <MapPin />
                        <div className='flex flex-col'>
                            <span> {data.capital.label} </span>
                            <span> {data.capital.value} </span>

                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Globe />
                        <div className='flex flex-col'>
                            <span> {data.continent.label} </span>
                            <span> {data.continent.value} </span>
                        </div>
                        
                    </div>
                    <div className='flex items-center gap-2'>
                        <BookA />
                        <div className='flex flex-col'>
                            <span> {data.official_language.label} </span>
                            <span> {data.official_language.value} </span>
                        </div>
                        
                    </div>
              </div>

              <Link
                href="/country"
                className="rounded-full bg-blue-500 px-5 py-3 text-[14px] font-semibold mt-3 text-white hover:bg-blue-700 flex items-center gap-2" 
              >
                Explore countries <MoveRight />
              </Link>
            </div>
          </div>
        </section>  
  );
}
