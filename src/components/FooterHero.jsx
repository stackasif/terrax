import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sunset from '@/assets/sunset.png'
import { MoveRight } from 'lucide-react'

function FooterHero() {
  return (
    <section className="relative h-[450px] w-full overflow-hidden ">
    
    <Image
      src={sunset}
      alt="earth image"
      fill
      priority
      className="object-cover"
    />
  
    
    <div className="absolute inset-0 z-10">
      <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col items-start justify-center px-4 pb-2 text-white">
        <p className="text-sm text-gray-300">
          A MORE CONNECTED PLANET
        </p>
  
        <h1 className="text-[60px] leading-none mt-2">
         <span className="text-[75px]"> Explore</span> <br />
          the world
        </h1>
  
        <p className="mb-15 mt-3 text-[14px] text-gray-300">
          Discover countries, cities and remarkable <br /> places from every corner of our planet.
        </p>
  
       <div className="flex gap-2">
         <Link
          href="/country"
          className="rounded-full bg-blue-500 px-3 md:px-5 py-1 md:py-3 text-[12px] md:text-[14px] font-medium md:font-semibold text-white hover:bg-blue-700 flex items-center gap-2" 
        >
          Explore countries <MoveRight />
        </Link>
        <Link
          href="/discover"
          className="bg-transparent text-white hover:bg-slate-100 hover:text-black text-[12px] md:text-[14px] font-medium md:font-semibold py-0 md:py-2 px-3 md:px-5 rounded-full flex items-center gap-2 border " 
        >
          Discover the world <MoveRight />
        </Link>
       </div>
      </div>
    </div>
  </section>
  )
}

export default FooterHero