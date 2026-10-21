import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import taj from '@/assets/taj.jpg'
import france from '@/assets/france.png'
import italy from '@/assets/italy.png'
import japan from '@/assets/japan.png'
import {MoveRight} from 'lucide-react'
function Countries() {
  return (
    <div className='text-black'>
        <div className="mx-auto h-full w-full max-w-7xl px-4 ">
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-[35px] font-semibold'>
                        Top Countries
                    </h2>
                    <p className='text-gray-700 leading-2 text-[15px]'>
                        Discover some of the most fascinating countries around the world.
                    </p>
                </div>
                <div className='text-sm '>
                    <Link
                     href="/country"
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800  py-1 px-2 border border-gray-400 rounded shadow"
                     >
                    View all countries <MoveRight />
                    </Link>
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center'>
                <div className="w-[250px] mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                    <div className="relative h-[125px] w-full">
                        <Image
                        src={taj}
                        alt="Taj Mahal, India"
                        className="object-cover"
                        width={250}
                        height={250}
                        />
                    </div>

                
                    <div className="p-3">

                        <div className="flex items-center gap-2">
                            <span className="text-xl">🇮🇳</span>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                India
                                </h3>
                                <p className="text-xs text-gray-500">
                                
                                </p>
                            </div>
                        </div>

                        {/* Explore Link */}
                        <Link
                        href="/country/india"
                        className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600"
                        >
                        India
                        <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                </div>
                 <div className="w-[250px] mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                    <div className="relative h-[125px] w-full">
                        <Image
                        src={france}
                        alt="Taj Mahal, India"
                        className="object-cover"
                        width={250}
                        />
                    </div>

                
                    <div className="p-3">

                        <div className="flex items-center gap-2">
                            <span className="text-xl">🇮🇳</span>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                India
                                </h3>
                                <p className="text-xs text-gray-500">
                                
                                </p>
                            </div>
                        </div>

                        {/* Explore Link */}
                        <Link
                        href="/country/india"
                        className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600"
                        >
                        France
                        <span aria-hidden="true">→</span>
                        </Link>
                </div>

                </div>

                 <div className="w-[250px] mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                    <div className="relative h-[125px] w-full">
                        <Image
                        src={japan}
                        alt="Taj Mahal, India"
                        className="object-cover"
                        width={250}
                        />
                    </div>

                
                    <div className="p-3">

                        <div className="flex items-center gap-2">
                            <span className="text-xl">🇮🇳</span>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                India
                                </h3>
                                <p className="text-xs text-gray-500">
                                
                                </p>
                            </div>
                        </div>

                        {/* Explore Link */}
                        <Link
                        href="/country/india"
                        className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600"
                        >
                        Japan
                        <span aria-hidden="true">→</span>
                        </Link>
                </div>

                </div>

                 <div className="w-[250px] mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                    <div className="relative h-[125px] w-full">
                        <Image
                        src={italy}
                        alt="Taj Mahal, India"
                        className="object-cover"
                        width={250}
                        />
                    </div>

                
                    <div className="p-3">

                        <div className="flex items-center gap-2">
                            <span className="text-xl">🇮🇳</span>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                India
                                </h3>
                                <p className="text-xs text-gray-500">
                                
                                </p>
                            </div>
                        </div>

                        {/* Explore Link */}
                        <Link
                        href="/country/india"
                        className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600"
                        >
                        Italy
                        <span aria-hidden="true">→</span>
                        </Link>
                </div>
                </div>

            </div>


            
                
      
        </div>
    </div>
  )
}

export default Countries