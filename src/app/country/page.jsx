'use client'
import React, { useContext, useState } from 'react'
import countrybg from '@/assets/countryBg.png'
import Image from 'next/image'
// import countrycard from '@/data/countryCard'
import {Search, ChevronRight} from 'lucide-react'

import Link from 'next/link'
import { dataContext } from '../context/UserContext'

function Page() {
  let [selectedContinent,setSelectedContinent]=useState("")

  let{card,input,setInput}=useContext(dataContext)

  const filteredCountries = card.filter((country) => {
  return (
    selectedContinent === "" ||
    country.value === selectedContinent
  );
});


  console.log("Input value:", input);
console.log("Input type:", typeof input);

  return (
    <>
     {input.trim().length === 0 && (
  <section className="relative w-full h-75 overflow-hidden">
    <Image
      src={countrybg}
      alt="Earth image"
      fill
      priority
      sizes="100vw"
      className="object-cover object-top"
    />

    <div className="absolute inset-0 z-10">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-4 text-white">
        <h1 className="text-[60px]">
          Explore Countries
        </h1>
        <p className="text-[16px]">
          Discover countries, their people, place and fascinating fact.
        </p>
      </div>
    </div>
  </section>
)}
      
<div className="mx-auto max-w-7xl px-3 sm:px-4">
  <div className="my-5 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">

    {/* Search Bar */}
    <div className="flex min-w-0 w-full items-center gap-3 rounded-2xl border border-gray-200 px-3 py-3 sm:flex-1 sm:py-4">
      <Search className="h-5 w-5 shrink-0 text-gray-500" />

      <form
        className="min-w-0 flex-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search countries..."
          className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </form>
    </div>

    {/* Continent Filter */}
    <select
      value={selectedContinent}
      onChange={(e) => setSelectedContinent(e.target.value)}
      className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:border-gray-400 sm:w-56 sm:shrink-0 sm:px-4 sm:py-4"
    >
      <option value="">All Continents</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Oceania">Oceania</option>
    </select>

  </div>
</div>


      {/* card section  */}
      
<div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-6">
  {filteredCountries.map((item, ind) => {
    return (
      <div
        key={ind}
       className="w-[340px] md:w-[300px] h-[300px] md:h-[330px] flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md text-sm">
        
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
