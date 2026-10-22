import Link from 'next/link';
import React from 'react'
import {Globe} from 'lucide-react'
import { FaInstagram,FaYoutube,FaXTwitter  } from "react-icons/fa6";


function Footer() {
  
  return (
    <footer className="w-full border-t border-amber-500/20 bg-[#071727] px-6 py-6 text-white md:px-12 ">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-600/60 pb-4 md:flex-row">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Globe size={36} strokeWidth={1.6} />
          <span className="text-2xl font-semibold tracking-[0.15em]">
            TerraX
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300 md:gap-6">
          <Link href="/" className="transition hover:text-sky-400">
            Home
          </Link>
          <span className="text-gray-500">•</span>
          <Link href="/country" className="transition hover:text-sky-400">
            Countries
          </Link>
          <span className="text-gray-500">•</span>
          <Link href="/discover" className="transition hover:text-sky-400">
            Discover
          </Link>
          <span className="text-gray-500">•</span>
          <Link href="/about" className="transition hover:text-sky-400">
            About
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-gray-300">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition hover:text-white"
          >
            <FaInstagram  size={20} />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="transition hover:text-white"
          >
            <FaYoutube size={21} />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="transition hover:text-white"
          >
            <FaXTwitter  size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-3 text-center text-xs tracking-wider text-gray-400">
        © 2026 TerraX. &nbsp; Developed by <i>ASIF</i>.
      </div>
    </footer>
  );
}
  

export default Footer