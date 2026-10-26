'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Search,Menu  } from "lucide-react";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { dataContext } from "@/app/context/UserContext";
import countries from '@/data/countryCard.json';

export default function Navbar() {
    const pathname=usePathname()
    const {input,setInput,card,setCard}=useContext(dataContext)

    useEffect(()=>{
      let newCard = countries.filter((item) =>
        item.Title.toLowerCase().includes(input.toLowerCase())
      );
      setCard(newCard)
    },[input])
  return (
    <div data-aos="fade-down">
    <div className="w-full sticky top-0  bg-white z-50" data-aos="fade-down" >
      <nav className="w-full max-w-[1280px] mx-auto " >
      <div className="flex items-center justify-between px-3 md:px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={logo}
              alt="TerraX Logo"
              width={25}
              height={25}
            />
            <h1 className="text-xl font-bold">
              TerraX
            </h1>
          </div>
           {pathname === "/" && (
    <form
        className="flex items-center gap-2 px-4 bg-white w-[65%] md:w-[40%] h-[40%] rounded-md shadow-md"
        onSubmit={(e) => e.preventDefault()}
    >
        <input
            type="text"
            placeholder="Search countries..."
            className="w-full outline-none text-[12px] md:text-[14px] py-2"
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
        <Search size={20} className="text-sky-800 font-bold" />
    </form>
)}


        <div className="hidden md:flex justify-center items-center gap-6 text-[14px] leading-[1.5] font-medium text-gray-900" >
              <Link className={pathname === "/" ? "text-sky-700 border-b-3 " : ""} href="/">Home</Link>

              <Link className={pathname.startsWith("/country") ? "text-sky-700 border-b-3" : ""} href="/country">
                Countries
              </Link>

              <Link className={pathname === "/about" ? "text-sky-700 border-b-3" : ""} href="/about">About</Link>

             

              <Link className={pathname === "/discover" ? "text-sky-700 border-b-3" : ""} href="/discover">Discover</Link>

              
        </div>

    

          {/* <div className="cursor-pointer flex justify-center items-center gap-2">
            
             <Menu className=" md:hidden"/>
          </div> */}
      </div>
    </nav>
    
    </div>
    </div>
  );
}
{/* <IoSearch className="w-5 h-5 text-blue-500"/> */}


