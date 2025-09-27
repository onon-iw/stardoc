"use client";

import Image from "next/image";
import { useState } from "react";
import { CircleArrowRightSVG, CricleArrowYSVG } from "./icons/icons";
import FadeInUp from "./FadeInUp";



export default function CardList() {
    const [cardIndex, setCardIndex] = useState<number | null>(null);

    return (

        <div className="w-full md:px-[13.5vw] md:pt-[4vw] pt-[8vw] px-[5vw]">
          <FadeInUp>
            <div className="pb-[5vw]">
              <p className="text-[#154c94] tracking-[3px] md:mb-[1vw] mb-[4vw] text-[clamp(8px,2vw,12px)] md:text-left text-center">UROLOGY CLINIC</p>
              <p className="text-[clamp(16px,2vw,28px)] md:text-left text-center">환자 한 분 한 분의 자신감과 자존감을 지키기 위해</p>
              <p className="text-[clamp(24px,2vw,48px)] md:text-left text-center">비뇨기과는 <span className="font-bold">앞서나가겠습니다.</span></p>
            </div>
          </FadeInUp>
          <div>
            <ul className="md:flex md:items-center">
              <li className={`relative w-full 
                ${cardIndex === 0
                    ? 'md:w-[30vw] h-[65.85vw]'
                    : cardIndex === null
                    ? 'md:w-[17.5vw]'
                    : 'md:w-[14.21vw]'} md:h-[25.24vw] h-[29.09vw] w-[90vw]overflow-hidden mb-[3vw] mr-[1vw] cursor-pointer transition-all duration-500 ease-in-out`}
                    onMouseEnter={() => setCardIndex(0)}
                    onMouseLeave={() => setCardIndex(null)}
                    onClick={() => setCardIndex(cardIndex === 0 ? null : 0)}      
                >
                <Image
                  src="/section-3-1.png"
                  alt="개인별 맞춤 진료"
                  fill
                  className={`object-cover md:object-center rounded`}
                  sizes={
                    cardIndex === 3
                    ? "(max-width: 768px) 100vw, 30vw"
                    : cardIndex === null
                    ? "(max-width: 768px) 100vw, 17.5vw"
                    : "(max-width: 768px) 100vw, 14.21vw"
                  }
                  />
                  <div className="absolute top-0 left-0 w-full h-full 
                    md:bg-[linear-gradient(to_bottom,rgba(196,219,227,0)_42%,rgba(152,197,214,0.92)_66%,#98c5d6)] 
                    bg-[linear-gradient(to_left,rgba(196,219,227,0)_42%,rgba(152,197,214,0.92)_66%,#98c5d6)] 
                    rounded"></div>                    
                  <div className="flex justify-between">
                    <div className="text-white absolute md:top-3/5 top-4 left-3">
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)]">비뇨기과 전문의</p>
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)] font-bold">개인별 맞춤 진료</p>
                        <p className="md:text-[clamp(8px,1vw,16px)] text-[clamp(12px,1vw,16px)] opacity-70">Three urologists</p>
                    </div>
                    <div className={`text-white absolute md:top-2/3 md:right-3 md:left-auto left-3 bottom-4 ${cardIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'} transition-all duration-500`}>
                        <div className="md:mb-[1vw] mb-[4vw] md:text-[clamp(8px,1vw,16px)]">
                            <p className="font-bold">서울병원 전문의 출신</p>
                            <p className="font-bold">성균관대학교 의과대학 외래부교수</p>
                        </div>
                        <div className="md:text-[clamp(8px,1vw,16px)]">
                            <p><span className="font-bold">서울병원</span>과 상호 환자 의뢰를</p>
                            <p>통한 <span className="font-bold">협력체계</span>를 운영</p>
                        </div>
                    </div>
                  </div>
                  <CircleArrowRightSVG className={`absolute md:bottom-[1vw] md:right-[1vw] z-30 w-[1.5vw] hidden ${cardIndex === 0 ? 'hidden' : 'md:block'}`}/>
                  <div className={`absolute right-[3vw] top-1/2 md:hidden bg-white rounded-full w-[5vw] aspect-square flex items-center justify-center transition-transform duration-500 ${cardIndex === 0 ? 'rotate-180' : ''}`}>
                    <CricleArrowYSVG />
                  </div>
              </li>
              <li className={`relative w-full 
                ${cardIndex === 1
                    ? 'md:w-[30vw] h-[65.85vw]'
                    : cardIndex === null
                    ? 'md:w-[17.5vw]'
                    : 'md:w-[14.21vw]'} md:h-[25.24vw] h-[29.09vw] overflow-hidden mr-[1vw] mb-[3vw] cursor-pointer transition-all duration-500 ease-in-out`}
                    onMouseEnter={() => setCardIndex(1)}
                    onMouseLeave={() => setCardIndex(null)} 
                    onClick={() => setCardIndex(cardIndex === 1 ? null : 1)}      
                >
                <Image
                  src="/section-3-2.png"
                  alt="1:1 전담 진료"
                  fill
                  className="object-cover md:object-center rounded"
                  sizes={
                    cardIndex === 3
                    ? "(max-width: 768px) 100vw, 30vw"
                    : cardIndex === null
                    ? "(max-width: 768px) 100vw, 17.5vw"
                    : "(max-width: 768px) 100vw, 14.21vw"
                  }
                  />
                  <div className="text-white absolute top-0 left-0 w-full h-full 
                    md:bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_32%,rgba(156,170,146,0.89)_67%,#9caa92_90%,#9caa92)] 
                    bg-[linear-gradient(to_left,rgba(255,255,255,0)_32%,rgba(156,170,146,0.89)_67%,#9caa92_90%,#9caa92)]
                    rounded"></div>
                  <div className="flex justify-between">
                    <div className="text-white absolute md:top-3/5 top-4 left-3">
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)]">프라이빗한</p>
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)] font-bold">1:1 전담 진료</p>
                        <p className="md:text-[clamp(8px,1vw,16px)] text-[clamp(12px,1vw,16px)] opacity-70">Private 1:1 care</p>
                    </div>
                    <div className={`text-white absolute md:top-2/3 md:right-3 md:left-auto left-3 bottom-4 ${cardIndex === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'} transition-all duration-500`}>
                        <div className="md:mb-[1vw] mb-[4vw] md:text-[clamp(8px,1vw,16px)]">
                            <p className="font-bold">담당 의료진이 상담부터 시술 및 수술</p>
                            <p className="font-bold">수술 후 관리까지 체계적 관리</p>
                        </div>
                        <div className="md:text-[clamp(8px,1vw,16px)]">
                            <p>환자 한 분 한 분 개인 상태에 따라</p>
                            <p><span className="font-bold">프라이빗한 맞춤형 진료</span> 보장</p>
                        </div>
                    </div>
                  </div>
                  <CircleArrowRightSVG className={`absolute md:bottom-[1vw] md:right-[1vw] z-30 w-[1.5vw] hidden ${cardIndex === 1 ? 'hidden' : 'md:block'}`}/>
                  <div className={`absolute right-[3vw] top-1/2 md:hidden bg-white rounded-full w-[5vw] aspect-square flex items-center justify-center transition-transform duration-500 ${cardIndex === 1 ? 'rotate-180' : ''}`}>
                    <CricleArrowYSVG />
                  </div>
              </li>
              <li className={`relative w-full 
                ${cardIndex === 2
                    ? 'md:w-[30vw] h-[65.85vw]'
                    : cardIndex === null
                    ? 'md:w-[17.5vw]'
                    : 'md:w-[14.21vw]'} md:h-[25.24vw] h-[29.09vw] overflow-hidden mr-[1vw] mb-[3vw] cursor-pointer transition-all duration-500 ease-in-out`}
                    onMouseEnter={() => setCardIndex(2)}
                    onMouseLeave={() => setCardIndex(null)}
                    onClick={() => setCardIndex(cardIndex === 2 ? null : 2)}       
                >
                <Image
                  src="/section-3-3.png"
                  alt="열려 있는 진료실"
                  fill
                  className="object-cover object-center rounded"
                  sizes={
                    cardIndex === 3
                    ? "(max-width: 768px) 100vw, 30vw"
                    : cardIndex === null
                    ? "(max-width: 768px) 100vw, 17.5vw"
                    : "(max-width: 768px) 100vw, 14.21vw"
                  }
                  />
                  <div className="text-white absolute top-0 left- w-full h-full
                    md:bg-[linear-gradient(to_bottom,rgba(191,166,154,0)_44%,#bfa69a_85%,#bfa69a)] 
                    bg-[linear-gradient(to_left,rgba(191,166,154,0)_44%,#bfa69a_85%,#bfa69a)] 
                    rounded"></div>
                  <div className="flex justify-between">
                    <div className="text-white absolute md:top-3/5 top-4 left-3">
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)]">365일 24시간</p>
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)] font-bold">열려 있는 진료실</p>
                        <p className="md:text-[clamp(8px,1vw,16px)] text-[clamp(12px,1vw,16px)] opacity-70">A clinic that always open</p>
                    </div>
                    <div className={`text-white absolute md:top-2/3 md:right-3 md:left-auto left-3 bottom-4 ${cardIndex === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'} transition-all duration-500`}>
                        <div className="md:mb-[1vw] mb-[4vw] md:text-[clamp(8px,1vw,16px)]">
                            <p className="font-bold">요로결석 응급센터 365일 24시간</p>
                            <p>시간 상관없이 요로결석 치료 가능</p>
                        </div>
                        <div className="md:text-[clamp(8px,1vw,16px)]">
                            <p className="font-bold">당일검사와 당일치료,</p>
                            <p>그리고 수술까지 한 번에 해결</p>
                        </div>
                    </div>
                  </div>
                  <CircleArrowRightSVG className={`absolute md:bottom-[1vw] md:right-[1vw] z-30 w-[1.5vw] hidden ${cardIndex === 2 ? 'hidden' : 'md:block'}`}/>
                  <div className={`absolute right-[3vw] top-1/2 md:hidden bg-white rounded-full w-[5vw] aspect-square flex items-center justify-center transition-transform duration-500 ${cardIndex === 2 ? 'rotate-180' : ''}`}>
                    <CricleArrowYSVG />
                  </div>
              </li>
              <li className={`relative w-full 
                ${cardIndex === 3
                    ? 'md:w-[30vw] h-[65.85vw]'
                    : cardIndex === null
                    ? 'md:w-[17.5vw]'
                    : 'md:w-[14.21vw]'} md:h-[25.24vw] h-[29.09vw] overflow-hidden md:mr-[1vw] mb-[3vw] cursor-pointer transition-all duration-500 ease-in-out`}
                    onMouseEnter={() => setCardIndex(3)}
                    onMouseLeave={() => setCardIndex(null)}
                    onClick={() => setCardIndex(cardIndex === 3 ? null : 3)}     
                >
                <Image
                  src="/section-3-4.png"
                  alt="발전하는 병원"
                  fill
                  className="object-cover object-center rounded"
                  sizes={
                    cardIndex === 3
                    ? "(max-width: 768px) 100vw, 30vw"
                    : cardIndex === null
                    ? "(max-width: 768px) 100vw, 17.5vw"
                    : "(max-width: 768px) 100vw, 14.21vw"
                  }
                  />
                  <div className="text-white absolute top-0 left-0 w-full h-full
                    md:bg-[linear-gradient(to_bottom,rgba(174,163,150,0)_49%,rgba(165,153,139,0.99)_78%,#a5998b_78%,#95897a)]
                    bg-[linear-gradient(to_left,rgba(174,163,150,0)_49%,rgba(165,153,139,0.99)_78%,#a5998b_78%,#95897a)]
                    rounded"></div>
                  <div className="flex justify-between">
                    <div className="text-white absolute md:top-3/5 top-4 left-3">
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)]">쉬지 않고</p>
                        <p className="md:text-[clamp(14px,1.5vw,28px)] text-[clamp(18px,1.5vw,28px)] font-bold">발전하는 병원</p>
                        <p className="md:text-[clamp(8px,1vw,16px)] text-[clamp(12px,1vw,16px)] opacity-70">A developing hospital</p>
                    </div>
                    <div className={`text-white absolute md:top-2/3 md:right-3 md:left-auto left-3 bottom-4 ${cardIndex === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'} transition-all duration-500`}>
                        <div className="md:mb-[1vw] mb-[4vw] md:text-[clamp(8px,1vw,16px)]">
                            <p className="font-bold">끊임 없는 연구, 해외교류 학술활동</p>
                            <p>독보적인 치료 시스템 보유</p>
                        </div>
                        <div className="md:text-[clamp(8px,1vw,16px)]">
                            <p>비뇨기질환 정복을 위해</p>
                            <p><span>지속적으로 연구</span>하는 병원</p>
                        </div>
                    </div>
                  </div>
                  <CircleArrowRightSVG className={`absolute md:bottom-[1vw] md:right-[1vw] z-30 w-[1.5vw] hidden ${cardIndex === 3 ? 'hidden' : 'md:block'}`}/>
                  <div className={`absolute right-[3vw] top-1/2 md:hidden bg-white rounded-full w-[5vw] aspect-square flex items-center justify-center transition-transform duration-500 ${cardIndex === 3 ? 'rotate-180' : ''}`}>
                    <CricleArrowYSVG />
                  </div>
              </li>
            </ul>
          </div>
        </div>
    )
}