import { Slide } from "@/types/silder"
import Link from "next/link"

export const slides: Slide[] = [
  { src: "/main-01.png",
    alt: "메인이미지", 
    width: 1980, 
    height: 1080, 
    node: (
      <>
          <h1 className="font-bold text-white text-[clamp(24px,1.5vw,64px)] text-center mb-[30px] px-5">비뇨기과의원의 자신감</h1>
          <p className="text-center text-[clamp(16px,1.5vw,38px)] px-5 mb-[10px] md:mb-[5px]">금년 기준 <span className="font-bold">18년 경력과 14만여 명의 풍부한 임상진료 경험</span>이 근거입니다.</p>
          <p className="text-center text-[clamp(12px,1.5vw,22px)] px-5">14만 여 명의 환자들의 신뢰로 검증 된 비뇨기과의원에서 자신감과 자존감을 찾아드립니다.</p>
      </>
      ),
    position: {
      top: 'top-2/3',
      left: 'left-0',
    }
  },
  { src: "/main-02.png", 
    alt: "메인이미지", 
    width: 1980, 
    height: 1080,
    node: (
      <>
        <h1 className="font-bold text-white text-[clamp(24px,1.5vw,64px)] text-center mb-[30px] px-5">프라이빗한 1:1 개인별 맞춤진료</h1>
        <p className="text-center text-[clamp(16px,1.5vw,38px)] px-5 mb-[10px] md:mb-[5px]"><span className="font-bold">환자 상태에 따른 최적의 치료방식으로</span> 섬세하게 치료합니다.</p>
        <p className="text-center text-[clamp(12px,1.5vw,22px)] px-5">XX지역 비뇨기과 권위자 전문의가 개인 맞춤 진료로 충분한 상담을 거쳐 확실하게 진료합니다.</p>
      </>
    ),
    position: {
      top: 'top-2/3',
      left: 'left-0',
    }
  },
  { src: "/main-03.png", 
    alt: "메인이미지", 
    width: 1980, 
    height: 1080,
    node: (
      <>
        <h1 className="font-bold text-white text-[clamp(24px,1.5vw,64px)] text-center mb-[30px] px-5">요로결석 365일 24시간 응급센터</h1>
        <p className="text-center text-[clamp(16px,1.5vw,38px)] px-5 mb-[10px] md:mb-[5px]">14만건 이상의 치료 레퍼런스를 바탕으로 <span className="font-bold">통증을 최소화하는 치료를 지향합니다.</span></p>
        <p className="text-center text-[clamp(12px,1.5vw,22px)] px-5">비뇨기과만의 독보적인 두 가지 쇄석 치료 방식으로 환자의 상태에 맞추어 정밀하게 치료합니다.</p>
      </>
    ),
    position: {
      top: 'top-2/3',
      left: 'left-0',
    }
  }
]

export const sectionSlides: Slide[] = [
  {
    src: "/section-4-1.png", 
    alt: "슬라이드 이미지", 
    width: 1980, 
    height: 1080,
    node: (
      <>
      <div className="text-center mb-[4vw]">
        <p className="text-[clamp(8px,1.5vw,12px)] tracking-[3px]">UROLOGY CLINIC</p>
      </div>
      <div className="text-center mb-[2vw]">
        <p className="text-[clamp(18px,1.5vw,32px)] mb-[2vw]"><span className="font-bold">365일 24시간</span> 응급센터</p>
        <p className="text-[clamp(40px,1.5vw,64px)] font-bold">요로결석</p>
      </div>
      <div className="text-center md:mb-[5vw] mb-[12vw]">
        <p className="text-[clamp(12px,1.5vw,20px)]">20시간 요로결석 치료 시스템으로 시간 관계 없이 언제든</p>
        <p className="text-[clamp(12px,1.5vw,20px)]">방문 당일 진단 및 치료가 가능합니다.</p>
      </div>
      <div className="text-center md:mb-[2vw] mb-[10vw]">
        <p className="text-[clamp(14px,1.5vw,28px)] font-bold">요로결석 더 이상 참지 마시고, 통증을 느낀 즉시 연락주세요.</p>
      </div>
      <ul className="md:flex md:justify-between md:items-center text-center md:w-auto w-full md:mb-[3vw] mb-[10vw]  md:px-[0] px-[5vw]">
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">매년 300건 이상의 요로결석 치료 진행</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">방문당일 진단, 치료</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">대학병원과 동일한 수준의 검사</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0]">체외충격파쇄석기 2대 보유</li>
      </ul>
      <div className="text-center">
        <Link href="/">
          <button className="backdrop-blur-sm bg-white/30 px-4 py-2 cursor-pointer">요로결석 더 보러가기 +</button>
        </Link>
       </div>
      </>
    ),
    position: {
      flex: 'flex',
      direction: 'flex-col',
      justify: 'justify-center',
      items: 'items-center',
      inset: 'inset-0'
    }
  },
  {
    src: "/section-4-2.png", 
    alt: "슬라이드 이미지", 
    width: 1980, 
    height: 1080,
    node: (
      <>
      <div className="text-center mb-[4vw]">
        <p className="text-[clamp(6px,1.5vw,12px)] tracking-[3px]">UROLOGY CLINIC</p>
      </div>
      <div className="text-center mb-[2vw]">
        <p className="text-[clamp(14px,1.5vw,32px)] mb-[2vw]">섬세한 진단과<span className="font-bold"> 프라이빗 맞춤</span> 치료</p>
        <p className="text-[clamp(40px,1.5vw,64px)] font-bold">여성 요실금 수술</p>
      </div>
      <div className="text-center md:mb-[5vw] mb-[12vw]">
        <p className="text-[clamp(12px,1.5vw,20px)]">불편함 없는 일상을 위해, 편안하고 프라이빗한 진료로</p>
        <p className="text-[clamp(12px,1.5vw,20px)]">섬세하고 확실하게 치료합니다.</p>
      </div>
      <div className="text-center md:mb-[2vw] mb-[10vw]">
        <p className="text-[clamp(14px,1.5vw,28px)] font-bold">더 이상 속으로 고민하지 마시고 치료받으세요! 요실금 치료는 자신감 회복입니다</p>
      </div>
      <ul className="md:flex md:justify-between md:items-center text-center md:w-auto w-full md:mb-[3vw] mb-[10vw] md:px-[0] px-[5vw]">
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">풍부한 경험의 의료진의 섬세한 진단</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">최적화된 개인 맞춤 치료 제시</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0]">몸에 무리를 주지 않는 치료로 건강한 일상 회복</li>
      </ul>
      <div className="text-center">
        <Link href="/">
          <button className="backdrop-blur-sm bg-white/30 px-4 py-2 cursor-pointer">요로결석 더 보러가기 +</button>
        </Link>
      </div>
      </>
    ),
    position: {
      flex: 'flex',
      direction: 'flex-col',
      justify: 'justify-center',
      items: 'items-center',
      inset: 'inset-0'
    }
  },
  {
    src: "/section-4-3.png", 
    alt: "슬라이드 이미지", 
    width: 1980, 
    height: 1080,
    node: (
      <>
      <div className="text-center mb-[4vw]">
        <p className="text-[clamp(6px,1.5vw,12px)] tracking-[3px]">UROLOGY CLINIC</p>
      </div>
      <div className="text-center mb-[2vw]">
        <p className="text-[clamp(14px,1.5vw,32px)] mb-[2vw]">최첨단 기술로 <span className="font-bold">안전하고 확실하게</span></p>
        <p className="text-[clamp(40px,1.5vw,64px)] font-bold">정관수술</p>
      </div>
      <div className="text-center md:mb-[5vw] mb-[12vw]">
        <p className="text-[clamp(12px,1.5vw,20px)]">안전성과 정확성을 최우선으로,</p>
        <p className="text-[clamp(12px,1.5vw,20px)]">비뇨기과의 정관수술로 안심하고 가족 계획을 설계하세요.</p>
      </div>
      <div className="text-center md:mb-[2vw] mb-[10vw]">
        <p className="text-[clamp(14px,1.5vw,28px)] font-bold">전문의가 최첨단 장비를 이용하여 안전하고 정확하게 진행합니다</p>
      </div>
      <ul className="md:flex md:justify-between md:items-center text-center md:w-auto w-full md:mb-[3vw] mb-[10vw] md:px-[0] px-[5vw]">
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">풍부한 임상경험으로 안전하고 정확한 수술</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0] mb-[3vw] md:mr-[1vw]">최소 침습 수술로 빠른 회복</li>
        <li className="text-[clamp(14px,1.5vw,18px)] border border-[#ffffff] rounded-4xl px-[1vw] py-[0.5vw] md:mb-[0]">정밀한 장비를 통해 절개 부위 통증 최소화</li>
      </ul>
      <div className="text-center">
        <Link href="/">
          <button className="backdrop-blur-sm bg-white/30 px-4 py-2 cursor-pointer">요로결석 더 보러가기 +</button>
        </Link>
       </div>
      </>
    ),
    position: {
      flex: 'flex',
      direction: 'flex-col',
      justify: 'justify-center',
      items: 'items-center',
      inset: 'inset-0'
    }
  },
]