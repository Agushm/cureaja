"use client";
import Image from "next/image";
import { useState } from "react";
import openWhatsApp from "@/utils/OpenWhatsapp";
import ThemeChanger from "../switch/DarkSwitch";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("Beranda");
  const navigation = [
    "Beranda",
    "Keunggulan Kami",
    "Layanan",
    "Visi & Misi",
    "Ahli Gizi",
  ];
  const [tabIndex, setTabIndex] = useState(0);
  const changeSelectedNav = (value: string, index: number) => {
    setSelectedNav(value);
    setTabIndex(index);
  };
  return (
    <>
    <div className="flex justify-between">
    <div className="dropdown w-screen">
          <label tabIndex={tabIndex} className="btn btn-ghost lg:hidden">
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
            tabIndex={tabIndex}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation.map((nav: any, index: number) => (
              <li key={index}>
                <a
                  onClick={() => {
                    changeSelectedNav(nav, index);
                  }}
                  href={`#${nav}`}
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
    className="p-3"
          alt="CureAja Logo"
          width="100"
          height="100"
        />
    </div>
    
        <div className="hidden md:inline-flex navbar bg-base-100 fixed w-full z-20 top-0 left-0">
      
      <div className="navbar-center mx-auto">
        <Image
          src="/logo.png"
          className="h-120 mr-20"
          alt="CureAja Logo"
          width="120"
          height="120"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((nav: any, index: number) => (
            <li
              key={index}
              className="text-lg rounded hover:text-red block mx-2 "
            >
              <a
                onClick={() => {
                  changeSelectedNav(nav, index);
                }}
                href={`#${nav}`}
                className={`${
                  selectedNav === nav ? "bg-orange bg-opacity-10" : ""
                }`}
                aria-current="page"
              >
                {nav}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:inline navbar-center mx-auto">
        <button
          onClick={() => openWhatsApp(null)}
          type="button"
          className="text-white bg-orange-500 dark:bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-4 py-3 text-center mr-3 md:mr-0 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </div>
    </>
    
  );
};

export default Navbar;
