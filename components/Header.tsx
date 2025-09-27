"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuHover, setIsMenuHover] = useState<boolean>(false);  
  const [isDesktop, setIsDesktop] = useState<boolean>(true);  
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }
  }, [isOpen])

  return (
    <header onMouseEnter={() => isDesktop && setIsMenuHover(true)} onMouseLeave={() => isDesktop && setIsMenuHover(false)} className={`w-full px-[12px] md:px-[4vw] h-[5vw] min-h-[54px] ${isScroll && !isDesktop ? 'hidden' : 'fixed'} md:fixed z-30 ${isMenuHover || isOpen || isScroll? 'bg-white border-b border-b-[#e1e1e4]' : 'bg-black/30 backdrop-blur border-b border-b-[#dbdbdb]'} transition-colors duration-500`}>
      <div className="relative flex items-center justify-between min-w-[108px] h-[5vw] min-h-[54px]">
        <Link className="relative block w-[10.2vw] h-[5vw] min-w-[108px] min-h-[54px]" href="/">
          <Image src="/logo-white.png" className={isMenuHover || isOpen || isScroll? 'hidden' : 'block object-contain'} alt="Logo" width="404" height="202" priority />
          <Image src="/logo-color.png" className={isMenuHover || isOpen || isScroll? 'block object-contain' : 'hidden'} alt="logo" width="404" height="202" priority />
        </Link>
        <Navbar isMenuHover={isMenuHover} isOpen={isOpen} setIsOpen={setIsOpen} isScroll={isScroll} />
      </div>
    </header>
  );
}