'use client'
import React, { useContext, useState } from 'react'
import countries from '@/data/countryCard.json'
import Image from 'next/image';
import Link from 'next/link';
import {Search, ChevronRight} from 'lucide-react'
import { dataContext } from '@/app/context/UserContext';


function HomeCard() {
  let {card,setCard}=useContext(dataContext)
  
  return (
    <>
    <div className='mx-auto max-w-7xl flex justify-between items-center py-5 px-3'>
        <div>
            <h1 className='text-[40px] md:text-[50px] font-bold md:font-semibold leading-none md:leading-tight'>
                Top Countries
            </h1>
            <p className='text-[12px] md:text-[14px] text-gray-500 leading-4 font-medium'>
                Discover some of the most fascinating countries around the world.
            </p>
        </div>
         <Link
                href={"/country"}
                className="bg-gray-100 hover:bg-gray-300 text-gray-800 rounded-full font-semibold inline-flex items-center gap-1 cursor-pointer px-2 py-2 md:p-3 border border-gray-300 text-[11px] md:text-[13px] shrink-0 self-center"
              >
                        View All countries
                    <ChevronRight className="w-[15px] h-[15px]" />
            </Link>
    </div>

    <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-6">
        
  {card.slice(0,8).map((item, ind) => {
    return (
      <div
        key={ind}
        className="w-[340px] md:w-[300px] h-[300px] md:h-[330px] flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md text-sm"
      >
        
        <Image
          src={item.image}
          alt={item.Title}
          width={300}
          height={200}
          className="w-full h-[220px] object-cover shrink-0"
        />

       
        <div className="flex flex-1 items-center justify-between p-2 gap-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            
              <Image
                src={item.flag}
                alt={item.Title}
                width={30}
                height={20}
                style={{ width: "28px", height: "auto" }}
                className="object-contain shrink-0"
              />


            <div className="flex flex-col min-w-0 leading-snug">
              <h2 className="font-semibold text-[13px]">
                {item.Title}
              </h2>

              <p className="text-[12px] text-gray-600">
                {item.value}
              </p>

              <p className="text-[12px] text-gray-600 mt-1  ">
                Capital: {item.Capital}
              </p>
            </div>
          </div>

          <Link
                href={`/country/${item.slug}`}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-semibold inline-flex items-center gap-1 cursor-pointer px-2 py-1 text-[13px] shrink-0 self-center"
              >
  Explore
  <ChevronRight className="w-[15px] h-[15px]" />
</Link>
        </div>
      </div>
    );
  })}
</div>
</>
  )
}

export default HomeCard