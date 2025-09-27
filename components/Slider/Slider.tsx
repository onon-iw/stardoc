"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { SliderProps } from "@/types/silder";
import clsx from "clsx";
import { useRef, useState } from "react";


export default function Slider({
  slides,
  autoplay = true,
  navigation = false,
}: SliderProps) {

  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const totalSlides = slides.length;

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={autoplay ? { delay: 4000 } : false}
        pagination={{
          el: ".custom-pagination",
          type: "fraction",
        }}
        className="overflow-hidden"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="relative w-full max-w-[1980px] h-auto">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="w-full h-[100vh] md:h-auto object-cover md:object-contain object-top z-1"
                priority
              />
              {s.node && (
                <div className={`absolute
                  ${clsx(
                    s.position?.flex,
                    s.position?.top,
                    s.position?.bottom,
                    s.position?.left,
                    s.position?.right,
                    s.position?.items,
                    s.position?.justify,
                    s.position?.inset,
                    s.position?.direction)}
                  w-full text-white z-11`}>
                  {s.node}
                </div>
              )}
          </SwiperSlide>
        ))}
      </Swiper>

      { navigation && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 text-white text-lg select-none z-20 md:flex hidden text-[clamp(12px,1vw,24px)]">
          <div
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &lt;
          </div>
          <div><span className="font-bold">{currentSlide}</span> / {totalSlides}</div>
          <div
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            &gt;
          </div>
        </div>    
      )}
    </div>
  );
}
