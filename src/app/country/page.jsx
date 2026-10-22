import React from 'react'
import countrybg from '@/assets/countryBg.png'
import Image from 'next/image'
import countrycard from '@/data/countryCard'
import {Search, ChevronRight} from 'lucide-react'
import flag from '@/assets/flag.png'
import Link from 'next/link'
function Page() {
  return (
    <>
      <section className='relative w-full h-75 overflow-hidden'>
        <Image
          src={countrybg}
          alt="Earth image"
          fill
          priority
          sizes="100vw"
          className='object-top'
        />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-4 text-white">
            <h1 className="text-[60px]">
              Explore Countries
            </h1>
            <p className='text-[16px]'>
              Discover countries, their people, place and facinating fact.
            </p>
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-7xl '>
        <div className="flex w-full gap-4 my-5">
          
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-200 px-5 py-4">
            <Search />
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full bg-transparent text-sm outline-none"
            /> 
            
          </div>

          <select className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none">
            <option value="">All Continents</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      {/* card section  */}
      
<div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-6">
  {countrycard.map((item, ind) => {
    return (
      <div
        key={ind}
        className="w-[300px] h-[330px] flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md text-sm"
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


            <div className="flex flex-col min-w-0">
              <h2 className="font-semibold text-[13px]">
                {item.Title}
              </h2>

              <p className="text-[12px] text-gray-600">
                {item.value}
              </p>

              <p className="text-[12px] text-gray-600 mt-1">
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
  );
}

 

export default Page;
