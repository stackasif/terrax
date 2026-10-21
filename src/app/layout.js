import {Poppins} from 'next/font/google';
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from '@/components/Footer';


const poppins=Poppins({
  subsets:['latin'],
  weight:['200','400','500','600','700'],
  display:'swap'
})

export const metadata = {
  title: "TerraX",
  description: "Explore the earth ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`w-full ${poppins.className}`}>

        <Navbar/>

        {children}

        <Footer/>
        </body>
    </html>
  );
}

