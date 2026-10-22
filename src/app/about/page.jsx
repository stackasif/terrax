import Image from "next/image";
import earth from '@/assets/aboutEarth.png'
import france from '@/assets/france.png'
import sunset from '@/assets/sunset.png'
import globe from '@/assets/globe.svg'
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
   
<div className="bg-gray-100">
  <section className="relative  h-[450px] w-full overflow-hidden">
  
  <Image
    src={sunset}
    alt="earth image"
    fill
    priority
    className="object-cover"
  />

  
  <div className="absolute inset-0 z-10">
    <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col items-start justify-center px-4 pb-2 text-white">
      

      <h1 className="text-[60px] font-semibold leading-none mt-2">
       
        About Our World
      </h1>

      <p className="mb-15 mt-3 text-[14px] text-gray-300">
       A simple place to explore  and learn about <br /> the planet we call home.
      </p>

    </div>
  </div>
 
</section>
<div className="mx-auto w-full max-w-[1280px] items-center gap-6 px-6 py-12">
  
      <div className="flex flex-col md:flex-row items-center gap-5  p-4 rounded-xl">
        
        <div className="w-full md:w-1/2">
          <Image
            src={france}
            alt="Planet Earth"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

        
        <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#10264a] mb-2">
                What is TERRAX?
              </h2>

              <p className="text-[14px] leading-[1.5] text-gray-700">
                TERRAX is a simple world information platform created
                to help people explore countries, cities, cultures,
                destinations and fascinating facts about our planet.
              </p>
              <br />
              <p className="text-[14px] leading-[1.5] text-gray-700">
                We bring useful information about the world together
                in a clean, visual and easy way — from countries and
                cities to cultures, natural wonders and interesting facts.
                Our goal is to make it easy for anyone to learn, discover
                and be inspired by the amazing diversity of our planet.
                We bring useful information about the world together
                in a clean, visual and easy way — from countries and
                cities to cultures, natural wonders and interesting facts.
                Our goal is to make it easy for anyone to learn, discover
                and be inspired by the amazing diversity of our planet.
              </p>
        </div>
      </div>

      
<div className="w-full  px-5 py-6 md:px-8">
  <h2 className="text-2xl md:text-3xl font-bold text-[#10264a]">
    Earth at a Glance
  </h2>

  <p className="text-sm text-[#536078] mt-1 mb-5">
    A quick look at the incredible planet we call home.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
    
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
        <Image src={globe} alt="globe" width={35}/>
      </div>
      <h3 className="text-2xl font-bold text-[#10264a] mt-1">1</h3>
      <p className="text-xs text-[#536078]">Planet Earth</p>
    </div>

   
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
        🗺️
      </div>
      <h3 className="text-2xl font-bold text-[#10264a] mt-1">7</h3>
      <p className="text-xs text-[#536078]">Continents</p>
    </div>

    
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-2xl">
        🌊
      </div>
      <h3 className="text-2xl font-bold text-[#10264a] mt-1">5</h3>
      <p className="text-xs text-[#536078]">Oceans</p>
    </div>

    
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
        🌐
      </div>
      <h3 className="text-2xl font-bold text-[#10264a] mt-1">195+</h3>
      <p className="text-xs text-[#536078]">Countries</p>
    </div>

    
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
        ⛰️
      </div>
      <h3 className="text-2xl font-bold text-[#10264a] mt-1">8,849m</h3>
      <p className="text-xs text-[#536078]">Highest Point</p>
    </div>

    
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
        👥
      </div>
      <h3 className="text-2xl font-bold text-[#10264a] mt-1">8B+</h3>
      <p className="text-xs text-[#536078]">People</p>
    </div>
  </div>
</div>


      <div className="flex flex-col md:flex-row items-center gap-5  p-4 rounded-xl">
        
        <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#10264a] mb-2">
                What is TERRAX?
              </h2>

              <p className="text-[14px] leading-[1.5] text-gray-700">
                TERRAX is a simple world information platform created
                to help people explore countries, cities, cultures,
                destinations and fascinating facts about our planet.
              </p>
                <br />
              <p className="text-[14px] leading-[1.5] text-gray-700">
                We bring useful information about the world together
                in a clean, visual and easy way — from countries and
                cities to cultures, natural wonders and interesting facts.
                Our goal is to make it easy for anyone to learn, discover
                and be inspired by the amazing diversity of our planet.
                We bring useful information about the world together
                in a clean, visual and easy way — from countries and
                cities to cultures, natural wonders and interesting facts.
                Our goal is to make it easy for anyone to learn, discover
                and be inspired by the amazing diversity of our planet.
              </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={france}
            alt="Planet Earth"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

      </div>





  </div>
  <section className="relative h-[450px] w-full overflow-hidden">
    
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
          className="rounded-full bg-blue-500 px-5 py-3 text-[14px] font-semibold text-white hover:bg-blue-700 flex items-center gap-2" 
        >
          Explore countries <MoveRight />
        </Link>
        <Link
          href="/discover"
          className="bg-transparent text-white hover:bg-slate-100 hover:text-black text-[14px] font-semibold py-2 px-4 rounded-full flex items-center gap-2 border " 
        >
          Discover the world <MoveRight />
        </Link>
       </div>
      </div>
    </div>
  </section>
</div>



  );
}
