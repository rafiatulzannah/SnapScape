import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-teal-500 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-gray-200 font-bold ">SnapScape</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={20} height={20} alt="logo" />
                  ) : (
                    <Image
                      src="/ham.svg"
                      width={20}
                      height={20}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-4 text-base text-white py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-teal-700  border-rose-500  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-4 text-base text-white py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-teal-700  border-rose-500   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-4 text-base text-white py-2 md:px-4 text-center  border-b-2 md:border-b-0  hover:bg-teal-700  border-rose-500   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/upload" onClick={() => setNavbar(!navbar)}>
                    Upload
                  </Link>
                </li>
                <li className="pb-4 text-base text-white py-2 md:px-4 text-center  border-b-2 md:border-b-0  hover:bg-teal-700  border-rose-500   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/login" onClick={() => setNavbar(!navbar)}>
                    Login
                  </Link>
                </li>
                <li className="pb-4 text-base text-white py-2 md:px-4 text-center  border-b-2 md:border-b-0  hover:bg-teal-700  border-rose-500   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/signup" onClick={() => setNavbar(!navbar)}>
                  Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;