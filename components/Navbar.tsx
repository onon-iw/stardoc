'use client';

import Link from "next/link";
import { ArrowSVG } from "./icons/icons";
import { HeaderProps } from "@/types/header";
import { menuItems } from "@/data/header";

export default function Navbar({ isMenuHover, isOpen, setIsOpen, isScroll }: HeaderProps) {

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="text-white relative h-[100%]">
      <ul className="justify-between items-center h-[100%] hidden md:flex">
        {menuItems.map((item, index) => (
            <li key={index} className={`relative cursor-pointer group h-[100%] px-[1.5vw] text-[clamp(8px,0.9vw,18px)] ${isMenuHover || isScroll? 'text-black' : 'text-white'}`} >
                <Link href={item.href} className="ml-1 flex imtes-center h-[100%]">
                <span className="flex items-center">{item.title}
                  {item.submenu && (
                    <ArrowSVG className="w-2 h-2 ml-2 fill-current transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#999999]" />
                  )}
                </span>
                </Link>
                {item.submenu && (
                    <ul className="absolute left-1/2 transform -translate-x-1/2 w-[100%] py-4
                  bg-white shadow-lg border border-gray-200
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-opacity duration-500 ease-in-out
                  text-center text-black">
                        {item.submenu.map((sub, subIndex) => (
                            <li key={subIndex} className="pb-2">
                                <Link href={sub.href}>{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-[54px] h-[54px] gap-[4px] focus:outline-none"
        >
          <span
            className={`block h-0.5 w-[17px] transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[6px] bg-[#154c94]" : "bg-white "
            }`}
          ></span>
          <span
            className={`block h-0.5 w-[17px] transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "bg-white "
            }`}
          ></span>
          <span
            className={`block h-0.5 w-[17px] transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[6px] bg-[#154c94]" : "bg-white "
            }`}
          ></span>
        </button>
      </div>
      <ul className={`fixed w-full h-[100vh] top-[54px] left-0 bg-white z-20 px-[30px]
                      trasform transition-all duration-500 ease-in-out md:hidden
                      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}>
          {menuItems.map((item, index) => (
            <li key={index} className="text-black font-medium py-[16px] border-b border-b-[#ebebee] text-[20px] group">
                <span className="flex justify-between items-center">{item.title}
                {item.submenu && (
                    <ArrowSVG className="w-[18px] h-[18px] fill-current text-[#999999]" />
                )}
                </span>
            </li>
          ))}
        </ul>
      
    </nav>
  )
}