"use client";

import Image from "next/image";
import { CheckSVG } from "./icons/icons";
import { useEffect, useRef, useState } from "react";

export default function Introduce() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.8 }
        );

        if(ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, []);

    return (     
        <div className="w-full relative">
            <div
                ref={ref} 
                className={
                `absolute flex flex-col justify-between z-20 text-white md:pt-[8vw]
                transition-all duration-700 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                >
                <div className="md:bg-transparent bg-black mb-[3vw] text-[clamp(16px,1vw,24px)] md:pl-[10vw] ">
                    <p>서울병원 출신 대표원장, 비뇨기과 18년 경력,</p>
                    <p>14만건 임상경험을 보유한 비뇨기과의원</p>
                </div>
                <h1 className="mb-[3vw] text-[clamp(28px,1vw,50px)] md:pl-[10vw] ">14년동안 유지중인 <span className="font-bold">서울지역 환자사랑, 愛</span></h1>
                <div className="mb-[5vw] text-[clamp(14px,1vw,20px)] md:pl-[10vw] ">
                    <p>"국내 최고의 병원에서 비뇨기과를 전공한 후, 연고도 없는 서울로 내려와</p>
                    <p>지역민들과 함께 울고 웃으며 진료한 지 어느덧 14년이 되었습니다.</p>
                    <p>비뇨기과의원은 그동안 환자분들께 불편한 몸의 회복뿐만 아니라,</p>
                    <p>이곳에 오길 잘했다는 흐뭇한 마음과 좋은 경험을 드리고자 항상 최선을 다해왔습니다."</p>
                </div>
                <p className="font-bold mb-[3vw] text-[clamp(20px,1vw,32px)] border-b border-b-[#6c6c6c] md:pl-[10vw] md:block hidden">비뇨기과의원은 믿을을 드리기 위해 노력하겠습니다.</p>
                <ul className="md:px-[10vw]">
                    <li className="md:mb-[0.5vw] flex items-center"><CheckSVG className="md:mr-[1vw] w-[1vw]" />당일 검사, 방일 치료 및 수술</li>
                    <li className="md:mb-[0.5vw] flex items-center"><CheckSVG className="md:mr-[1vw] w-[1vw]" />충분한 상담, 꼭 필요한 치료만 진행</li>
                    <li className="md:mb-[0.5vw] flex items-center"><CheckSVG className="md:mr-[1vw] w-[1vw]" />환자분들의 편안한 진료만을 생각한 동선 설계 인테리어</li>
                    <li className="md:mb-[0.5vw] flex items-center"><CheckSVG className="md:mr-[1vw] w-[1vw]" />대학병원과 동일한 수준의 검사 시스템</li>
                    <li className="md:mb-[0.5vw] flex items-center"><CheckSVG className="md:mr-[1vw] w-[1vw]" />1:1 개인상태별 관리 시스템</li>
                </ul>
            </div>
            <div className="w-full h-[100vh] relative md:px-0;">
            <Image
                src="/section-2-bg.png"
                alt="배경이미지"
                fill
                className="object-cover object-bottom-right"
                priority
            />
            </div>
        </div>
    )
}