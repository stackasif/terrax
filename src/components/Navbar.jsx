'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Search,Menu  } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname=usePathname()
  return (
    <div className="w-full sticky top-0  bg-white z-50">
      <nav className="w-full max-w-[1280px] mx-auto ">
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
        <div className="hidden md:flex justify-center items-center gap-6 text-[14px] leading-[1.5] font-medium text-gray-900">
              <Link className={pathname === "/" ? "text-sky-700 border-b-3 " : ""} href="/">Home</Link>

              <Link className={pathname === "/about" ? "text-sky-700 border-b-3" : ""} href="/about">About</Link>

             <Link className={pathname.startsWith("/country") ? "text-sky-700 border-b-3" : ""} href="/country">
                Countries
              </Link>

              <Link className={pathname === "/discover" ? "text-sky-700 border-b-3" : ""} href="/discover">Discover</Link>

              
        </div>

          <form action="" className="flex items-center gap-2 px-4 bg-white w-[65%] md:w-[40%] h-[40%] md:h-[] rounded-md shadow-md" >
                <input type="text" placeholder="Search countries...." className="w-full outline-none text-[12px] md:text-[14px] py-2" />
                <Search size={20} className="text-sky-800 font-bold" />

            </form>

          {/* <div className="cursor-pointer flex justify-center items-center gap-2">
            
             <Menu className=" md:hidden"/>
          </div> */}
      </div>
    </nav>
    
    </div>
  );
}
{/* <IoSearch className="w-5 h-5 text-blue-500"/> */}


