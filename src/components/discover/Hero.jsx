import Image from "next/image";
import discover from '@/assets/discover.png'
import Link from "next/link";
import {MoveRight} from 'lucide-react'
export default function Hero() {
  return (
   
<section className="relative h-[450px] w-full overflow-hidden">
  
  <Image
    src={discover}
    alt="earth image"
    fill
    priority
    className="object-cover"
  />

  
  <div className="absolute inset-0 z-10">
    <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col items-start justify-center px-4 pb-2 text-white" >
      <p className="text-sm text-gray-200" data-aos="fade-right">
        LEARN | EXPLORE | BE INSPIRED
      </p>

      <h1 className="text-[60px] leading-none mt-2 font-semibold" data-aos="fade-right">
       <span className="text-[75px]"> DISCOVER</span> <br />
        THE UNSEEN
      </h1>

      <p className="mb-15 mt-3 text-[17px] text-gray-200" data-aos="fade-right">
        A world full of secrets, wonders, and stories<br />  waiting to be discoverd.
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
