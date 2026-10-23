'use client'
import Countries from '@/components/Countries'
import Things from '@/components/discover/Things'
import FooterHero from '@/components/FooterHero'

import Hero from '@/components/Hero'
import HomeCard from '@/components/HomeCard'
import React, { useContext } from 'react'
import { dataContext } from './context/UserContext'

export default function Home() {
  let{input} = useContext(dataContext)
  return (
    <main>
      {
      
        !input?<Hero/>:null
      }
      

      <HomeCard/>
      <div className='mx-auto h-full w-full  bg-[#f3f6fb]'>
        <Things/>
      </div>
      <FooterHero />
      
    </main>
  )
}

