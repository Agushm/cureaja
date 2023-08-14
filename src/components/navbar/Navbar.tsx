"use client";
import Image from "next/image";
import { useState } from "react";
import openWhatsApp from "@/utils/OpenWhatsapp";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("Beranda");
  const navigation = ["Beranda", "Tentang Kami", "Layanan", "Kontak"];

  const changeSelectedNav = (value: string) => {
    setSelectedNav(value);
  };
  return (
    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    //     <Image
    //       src="/logo.png"
    //       className="h-120 mr-3"
    //       alt="CureAja Logo"
    //       width="120"
    //       height="120"
    //     />

    //     <div className="flex md:order-2">
    //       <button
    //         onClick={() => openWhatsApp(null)}
    //         type="button"
    //         className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
    //       >
    //         Konsultasi Sekarang
    //       </button>
    //     </div>
    //     <div
    //       className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-sticky"
    //     >
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         {navigation.map((nav: any, index: number) => (
    //           <li key={index}>
    //             <a
    //               onClick={() => {
    //                 changeSelectedNav(nav);
    //               }}
    //               href={`#${nav}`}
    //               className={`block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-200 hover:text-black ${
    //                 selectedNav === nav ? "text-orange-500" : ""
    //               }`}
    //               aria-current="page"
    //             >
    //               {nav}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <div className="navbar bg-base-100 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="navbar-center mx-auto">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation.map((nav: any, index: number) => (
              <li key={index}>
                <a
                  onClick={() => {
                    changeSelectedNav(nav);
                  }}
                  href={`#${nav}`}
                  // className={`block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-200 hover:text-black ${
                  //   selectedNav === nav ? "text-orange-500" : ""
                  // }`}
                  aria-current="page"
                >
                  {nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/logo.png"
          className="h-120 mr-3"
          alt="CureAja Logo"
          width="120"
          height="120"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((nav: any, index: number) => (
            <li key={index}>
              <a
                onClick={() => {
                  changeSelectedNav(nav);
                }}
                href={`#${nav}`}
                className={`block mx-2 text-gray-700 rounded hover:bg-orange-200 hover:text-black ${
                  selectedNav === nav ? "text-orange-500 bg-white" : ""
                }`}
                aria-current="page"
              >
                {nav}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-center mx-auto">
        <button
          onClick={() => openWhatsApp(null)}
          type="button"
          className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </div>
  );
};

export default Navbar;
