import Hero from '@/components/discover/Hero'
import Places from '@/components/discover/Places'
import Planet from '@/components/discover/Planet'
import Things from '@/components/discover/Things'
import Wonders from '@/components/discover/Wonder'
import React from 'react'

function page() {
  return (
    <main className=' bg-[#f3f6fb]'>
      <Hero/>
      <div className='mx-auto h-full w-full max-w-[1280px]'>
        <Wonders/>
        <Places/>
        <Things/>
        <Planet/>
      </div>
      
      
    </main>
  )
}

export default page