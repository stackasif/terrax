import Image from "next/image";
import earth from '@/assets/earth.png'
import Link from "next/link";
import {MoveRight} from 'lucide-react'
export default function Hero() {
  return (
   
<section className="relative h-[450px] w-full overflow-hidden">
  
  <Image
    src={earth}
    alt="earth image"
    fill
    priority
    className="object-cover"
  />

  
  <div className="absolute inset-0 z-10">
    <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col items-start justify-center px-4 pb-2 text-white">
      <p className="text-sm text-gray-300" data-aos="fade-right">
        A MORE CONNECTED PLANET
      </p>

      <h1 className="text-[60px] leading-none mt-2" data-aos="fade-right">
       <span className="text-[75px]"> Explore</span> <br />
        the world
      </h1>

      <p className="mb-15 mt-3 text-[14px] text-gray-300" data-aos="fade-right">
        Discover countries, cities and remarkable <br /> places from every corner of our planet.
      </p>

      <Link
        data-aos="fade-up"
        href="/country"
        className="rounded-full bg-blue-500 px-5 py-3 text-[14px] font-semibold text-white hover:bg-blue-700 flex items-center gap-2" 
      >
        Explore countries <MoveRight />
      </Link>
    </div>
  </div>
</section>

  );
}
