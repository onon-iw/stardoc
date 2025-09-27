"use client";

import { SectionNavProps } from "@/types/section";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function SectionNav({ sections }: SectionNavProps) {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        sections.forEach((id, index) => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(index);
            }
        });
        };
        console.log(currentSection);
        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <div className="fixed top-1/2 left-5 z-99 transform -translate-y-1/2 flex-col gap-3 md:flex hidden">
            {sections.map((id, index) => (
                <div
                key={id}
                className={clsx(
                    "w-3 h-3 rounded-full border transition-colors duration-300 cursor-pointer border-[#154c94] bg-[#154c94]",
                    (currentSection === 1 || currentSection === 3 || currentSection === 4 || currentSection === 6) && 'border-[#ffffff] bg-[#ffffff]',
                    (currentSection !== index) && 'bg-transparent'
                     )}
                onClick={() => {
                    const sectionEl = document.getElementById(id);
                    sectionEl?.scrollIntoView({ behavior: "smooth" });
                    setCurrentSection(index);
                }}
                />
            ))}
        </div>
    )
}