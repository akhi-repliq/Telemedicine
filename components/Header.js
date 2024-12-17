'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import icon from "@/public/telemedicine.png";
import menu from "@/public/menu.png";
import close from "@/public/close.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const isSignedIn = localStorage.getItem("signedIn") === "true";
    setSignedIn(isSignedIn);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("authToken");
    setSignedIn(false);
    window.location.href = "/"; 
  };
  return (
    <div className="font-[Poppins] bg-gradient-to-b from-purple-200 to-white">
      <header className="bg-white shadow-md">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
          <div>
            <Link href="/">
              <Image className="w-10 cursor-pointer" width={35} height={35} src={icon} alt="Telemedicine logo" />
            </Link>
          </div>
          <div
            className={`nav-links duration-300 md:static absolute bg-white md:min-h-fit left-0 ${
              isMenuOpen ? 'top-[9%] opacity-100' : 'top-[-100%] opacity-0'
            } md:w-auto w-full flex items-center px-5 md:opacity-100 transition-all ease-in-out`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-sans text-gray-700">
              <li>
                <Link className="hover:text-violet-500 text-lg font-semibold" href="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-violet-500 text-lg font-semibold" href="/appointments">Appointments</Link>
              </li>
              <li>
                <Link className="hover:text-violet-500 text-lg font-semibold" href="/List">Doctor's List</Link>
              </li>
              <li>
                <Link className="hover:text-violet-500 text-lg font-semibold" href="/Help">Help/Support</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {signedIn ? (
              <>
     
                <button
                  onClick={handleLogout}
                  className="bg-violet-500 text-white px-5 py-2 rounded-full hover:bg-gray-500 hover:text-black"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/Signin">
                  <button className="bg-violet-500 text-white px-5 py-2 rounded-full hover:bg-gray-500 hover:text-black">Sign In</button>
                </Link>
                <Link href="/Signup">
                  <button className="bg-violet-500 text-white px-5 py-2 rounded-full hover:bg-gray-500 hover:text-black">Sign Up</button>
                </Link>
              </>
            )}
            <button onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
              {isMenuOpen ? (
                <Image className="w-10" src={close} alt="Close menu" />
              ) : (
                <Image src={menu} className="w-10" alt="Open menu" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
