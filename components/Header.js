'use client'
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import icon from "@/public/telemedicine.png";
import menu from "@/public/menu.png"
import close from "@/public/close.png"
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[signedIn,setSignedIn]=useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const isSignedIn = localStorage.getItem("signedIn") === "true";
    setSignedIn(isSignedIn);
  }, []);
  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#ffffff] to-[#ffffff] ">
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Link href="/">
              <Image className="w-16 cursor-pointer" src={icon} alt="nothing" />
            </Link>
          </div>
          <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit  left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-sans">
              <li>
                <Link className="hover:text-gray-500 text-xl font-bold " href="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 text-xl font-bold" href="/Appointments">Appointments</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 text-xl font-bold" href="/List">Doctor's List</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 text-xl font-bold" href="/Help">Help/Support</Link>
              </li>
            </ul>
          </div>
{signedIn?(
            <div className="flex items-center gap-6">
            <Link href="/Profile">  <button className="bg-violet-500 text-white px-5 py-2 rounded-full hover:bg-fuchsia-500">Profile</button></Link>
          </div>
):(
          <div className="flex items-center gap-6">
            <Link href="/Signin">  <button className="bg-violet-500 text-white px-5 py-2 rounded-full hover:bg-fuchsia-500">Sign in</button></Link>
            <Link href="/Signup"> <button className="bg-violet-500 text-white px-5 py-2 rounded-full hover:bg-fuchsia-500">Sign up</button></Link>
            <button onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
              {isMenuOpen ? <Image className="w-10" src={close} alt="nothing" /> : <Image src={menu} className="w-10" alt="nothing" />}
            </button>
          </div>
)}
        </nav>
      </header>
    </div>
  )
}