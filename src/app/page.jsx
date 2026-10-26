'use client'
import Countries from '@/components/Countries'
import Things from '@/components/discover/Things'
import FooterHero from '@/components/FooterHero'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Hero from '@/components/Hero'
import HomeCard from '@/components/HomeCard'
import React, { useContext } from 'react'
import { dataContext } from './context/UserContext'



export default function Home() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: "ease-in-out",
  });
}, []);

  let{input} = useContext(dataContext)
  return (
    <main>
      {
      
        !input?<Hero />:null
      }
      

      <HomeCard/>
      <div className='mx-auto h-full w-full  bg-[#f3f6fb]'>
        <Things/>
      </div>
      <FooterHero />
      
    </main>
  )
}

