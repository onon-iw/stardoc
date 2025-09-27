"use client";

import React, { useEffect, useRef, useState } from "react";

function FadeInUp({ children }: { children: React.ReactNode}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setIsVisible(true),
        { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
        if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  );
}

export default FadeInUp;