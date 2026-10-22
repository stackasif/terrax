import Countries from '@/components/Countries'
import Things from '@/components/discover/Things'
import FooterHero from '@/components/FooterHero'

import Hero from '@/components/Hero'
import HomeCard from '@/components/HomeCard'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Hero/>
      {/* <Countries/> */}

      <HomeCard/>
      <div className='mx-auto h-full w-full  bg-[#f3f6fb]'>
        <Things/>
      </div>
      <FooterHero />
      
    </main>
  )
}

