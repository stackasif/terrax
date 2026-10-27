'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Search,Menu  } from "lucide-react";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "@/app/context/UserContext";
import countries from '@/data/countryCard.json';

export default function Navbar() {
    const pathname=usePathname()
      const [open, setOpen] = useState(false);

    const {input,setInput,card,setCard}=useContext(dataContext)

    useEffect(()=>{


      let newCard = countries.filter((item) =>
        item.Title.toLowerCase().includes(input.toLowerCase())
      );
      setCard(newCard)
    },[input])
  return (
    // <div data-aos="fade-down">
    <div className="w-full sticky top-0  z-50 bg-white" >
      <nav className="w-full max-w-[1280px] mx-auto " >
      <div className="flex items-center justify-between px-2 md:px-3 md:px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={logo}
              alt="TerraX Logo"
              width={25}
              height={25}
            />
            <h1 className="text-[16px] md:text-xl font-bold">
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
            
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                <Menu />
              </button>

              {open && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-white text-xl font-medium">

                  <button
                  onClick={() => setOpen(false)}
                  className="absolute right-5 top-5 text-3xl text-gray-900"
                >
                  &times;
                </button>

                  <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                  <Link href="/country" onClick={() => setOpen(false)}>Countries</Link>
                  <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                  <Link href="/discover" onClick={() => setOpen(false)}>Discover</Link>
                </div>
                )}
            </div>
      </div>
    </nav>
    
    </div>
    // </div>
  );
}
{/* <IoSearch className="w-5 h-5 text-blue-500"/> */}


