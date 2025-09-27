import CardList from "@/components/CardList";
import FadeInUp from "@/components/FadeInUp";
import { CheckSVG } from "@/components/icons/icons";
import SectionNav from "@/components/SectionNav";
import Slider from "@/components/Slider/Slider";
import { sectionSlides, slides } from "@/data/section";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "비뇨기과",
    description: "비뇨기과 홈페이지입니다",
    openGraph: {
      title: "비뇨기과",
      description: "비뇨기과 홈페이지입니다.",
      type: "website",
      url: "https://www.startdoctor.co.kr/",
      images: [
        {
          url: "hhttps://www.startdoctor.co.kr/theme/ybusiness_1/img/main/main_02_01_01.png",
          width: 445,
          height: 278,
          alt: "비뇨기과 이미지",
        },
      ],
    },
  };
}

export default function Home() {
  const sections = ["section-0", "section-1", "section-2", "section-3", "section-4", "section-5", "section-6"];

  return (
    <main>
      <SectionNav sections={sections} />
      <section id="section-0">
        <div className="w-full">
          <Slider slides={slides} autoplay navigation={true} />
        </div>
      </section>
      <section id="section-1" className="md:flex">
        <div className="w-full relative">     
          <div className="absolute flex flex-col justify-between z-20 text-white md:pt-[8vw] px-[3vw] pt-[25vw]">
            <FadeInUp>
              <div className="text-[clamp(14px,1vw,24px)] md:pl-[10vw] md:mb-[0] mb-[10vw]">
                <p>서울병원 출신 대표원장, 비뇨기과 18년 경력,</p>
                <p>14만건 임상경험을 보유한 비뇨기과의원</p>
              </div>
            </FadeInUp>
            <FadeInUp>
                <h1 className="text-[clamp(20px,1vw,50px)] md:pl-[10vw] md:mb-[3vw] mb-[20vw]">14년동안 유지중인 <span className="font-bold">서울지역 환자사랑, 愛</span></h1>
            </FadeInUp>
            <FadeInUp>
              <div className="md:mb-[5vw] text-[clamp(12px,1vw,20px)] md:pl-[10vw] mb-[25vw]">
                <p>"국내 최고의 병원에서 비뇨기과를 전공한 후, 연고도 없는 서울로 내려와</p>
                <p>지역민들과 함께 울고 웃으며 진료한 지 어느덧 14년이 되었습니다.</p>
                <p>비뇨기과의원은 그동안 환자분들께 불편한 몸의 회복뿐만 아니라,</p>
                <p>이곳에 오길 잘했다는 흐뭇한 마음과 좋은 경험을 드리고자 항상 최선을 다해왔습니다."</p>
              </div>
            </FadeInUp>
            <p className="font-bold mb-[3vw] text-[clamp(20px,1vw,32px)] border-b border-b-[#6c6c6c] md:pl-[10vw] md:block hidden">비뇨기과의원은 믿을을 드리기 위해 노력하겠습니다.</p>
            <ul className="md:px-[10vw]">
              <li className="md:mb-[0.5vw] flex items-center text-[clamp(14px,1vw,50px)]"><CheckSVG className="md:mr-[1vw] md:w-[1vw] w-[3vw] mr-[2vw]" />당일 검사, 방일 치료 및 수술</li>
              <li className="md:mb-[0.5vw] flex items-center text-[clamp(14px,1vw,50px)]"><CheckSVG className="md:mr-[1vw] md:w-[1vw] w-[3vw] mr-[2vw]" />충분한 상담, 꼭 필요한 치료만 진행</li>
              <li className="md:mb-[0.5vw] flex items-center text-[clamp(14px,1vw,50px)]"><CheckSVG className="md:mr-[1vw] md:w-[1vw] w-[3vw] mr-[2vw]" />환자분들의 편안한 진료만을 생각한 동선 설계 인테리어</li>
              <li className="md:mb-[0.5vw] flex items-center text-[clamp(14px,1vw,50px)]"><CheckSVG className="md:mr-[1vw] md:w-[1vw] w-[3vw] mr-[2vw]" />대학병원과 동일한 수준의 검사 시스템</li>
              <li className="md:mb-[0.5vw] flex items-center text-[clamp(14px,1vw,50px)]"><CheckSVG className="md:mr-[1vw] md:w-[1vw] w-[3vw] mr-[2vw]" />1:1 개인상태별 관리 시스템</li>
            </ul>
          </div>
          <div className="w-full h-[100vh] relative md:px-0;">
            <picture>
              <source srcSet="/section-2-bg-m.png" media="(max-width: 768px)" />
              <Image
                src="/section-2-bg.png"
                alt="배경이미지"
                fill
                className="object-cover object-bottom-right"
              />
            </picture>
          </div>
        </div>
      </section>
      <section id="section-2">
        <CardList />
      </section>
      <section id="section-3">
          <Slider slides={sectionSlides} autoplay navigation={false} />
       </section>
      <section id="section-4" className="bg-[#16161a] text-[#ffffff]">
        <div className="md:py-[6vw] pt-[8vw] md:px-[13.5vw] pb-[5vw] px-[5vw]">
          <FadeInUp>
            <div className="text-center">
              <p className="text-[clamp(8px,1vw,12px)] tracking-[3px] md:mb-[2vw] mb-[5vw]">UROLOGY CLINIC</p>
              <p className="text-[clamp(20px,1vw,40px)] md:mb-[4vw] mb-[8vw]">비뇨기과 의원 <span className="font-bold">진료과목 안내</span></p>
            </div>
          </FadeInUp>
          <ul className="flex justify-between items-center flex-wrap">
            <li className="cursor-pointer group mb-[5vw] md:mb-[0]">
              <div className="relative md:w-[23vw] md:h-[9.63vw] w-[44vw] h-[18.42vw]">
                <Image
                  src="/section-5-1.png"
                  alt="요로결석 이미지"
                  fill 
                  className="obejct-contain transition-opacity duration-300 group-hover:opacity-20"
                  sizes="(min-width: 768px) 23vw, 44vw"
                  />
              </div>
              <div className="md:flex md:items-center md:mt-[1vw] md:mb-[3vw]">
                <p className="text-[clamp(14px,1vw,24px)] md:mr-[2vw]">요로결석</p>
                <p className="text-[#919195] text-[clamp(10px,1vw,20px)]">Urinary stone</p>
              </div>
            </li>
            <li className="cursor-pointer group mb-[5vw] md:mb-[0]">
              <div className="relative md:w-[23vw] md:h-[9.63vw] w-[44vw] h-[18.42vw]">
                <Image
                  src="/section-5-2.png"
                  alt="정관수술 이미지"
                  fill
                  className="obejct-contain transition-opacity duration-300 group-hover:opacity-20"
                  sizes="(min-width: 768px) 23vw, 44vw"
                  />
              </div>
              <div className="md:flex md:items-center md:mt-[1vw] md:mb-[3vw]">
                <p className="text-[clamp(14px,1vw,24px)] md:mr-[2vw]">정관수술</p>
                <p className="text-[#919195] text-[clamp(10px,1vw,20px)]">Vasectomy</p>
              </div>
            </li>
            <li className="cursor-pointer group mb-[5vw] md:mb-[0]">
              <div className="relative md:w-[23vw] md:h-[9.63vw] w-[44vw] h-[18.42vw]">
                <Image
                  src="/section-5-3.png"
                  alt="남성수술 이미지"
                  fill
                  className="obejct-contain transition-opacity duration-300 group-hover:opacity-20"
                  sizes="(min-width: 768px) 23vw, 44vw"
                  />
              </div>
              <div className="md:flex md:items-center md:mt-[1vw] md:mb-[3vw]">
                <p className="text-[clamp(14px,1vw,24px)] md:mr-[2vw]">남성수술</p>
                <p className="text-[#919195] text-[clamp(10px,1vw,20px)]">Circumcision</p>
              </div>
            </li>
            <li className="cursor-pointer group mb-[5vw] md:mb-[0]">
              <div className="relative md:w-[23vw] md:h-[9.63vw] w-[44vw] h-[18.42vw]">
                <Image
                  src="/section-5-4.png"
                  alt="여성 요실금 수술 이미지"
                  fill
                  className="obejct-contain transition-opacity duration-300 group-hover:opacity-20"
                  sizes="(min-width: 768px) 23vw, 44vw"
                  />
              </div>
              <div className="md:flex md:items-center md:mt-[1vw]">
                <p className="text-[clamp(14px,1vw,24px)] md:mr-[2vw]">여성 요실금 수술</p>
                <p className="text-[#919195] text-[clamp(10px,1vw,20px)]">Urinary incontinence</p>
              </div>
            </li>
            <li className="cursor-pointer group mb-[5vw] md:mb-[0]">
              <div className="relative md:w-[23vw] md:h-[9.63vw] w-[44vw] h-[18.42vw]">
                <Image
                  src="/section-5-5.png"
                  alt="남성비뇨기과 이미지"
                  fill
                  className="obejct-contain transition-opacity duration-300 group-hover:opacity-20"
                  sizes="(min-width: 768px) 23vw, 44vw"
                  />
              </div>
              <div className="md:flex md:items-center md:mt-[1vw]">
                <p className="text-[clamp(14px,1vw,24px)] md:mr-[2vw]">남성비뇨기과</p>
                <p className="text-[#919195] text-[clamp(10px,1vw,20px)]">Male urology</p>
              </div>
            </li>
            <li className="cursor-pointer group mb-[5vw] md:mb-[0]">
              <div className="relative md:w-[23vw] md:h-[9.63vw] w-[44vw] h-[18.42vw]">
                <Image
                  src="/section-5-6.png"
                  alt="여성비뇨기과 이미지"
                  fill
                  className="obejct-contain transition-opacity duration-300 group-hover:opacity-20"
                  sizes="(min-width: 768px) 23vw, 44vw"
                  />
              </div>
              <div className="md:flex md:items-center md:mt-[1vw]">
                <p className="text-[clamp(14px,1vw,24px)] md:mr-[2vw]">요로결석</p>
                <p className="text-[#919195] text-[clamp(10px,1vw,20px)]">Famale urology</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="section-5">
        <div className="w-full relative">
          <div className="absolute w-full text-center flex flex-col justify-between z-20 text-black md:pt-[8vw]">
            <p className="text-[clamp(8px,1vw,12px)] tracking-[3px] md:mb-[2vw] mb-[5vw] text-[#154c94]">UROLOGY CLINIC</p>
            <p className="text-[clamp(30px,1vw,48px)] md:mb-[4vw] mb-[8vw]">비뇨기과 의원 <span className="font-bold">의료진을 소개합니다.</span></p>
          </div>
          <div className="absolute inset-0 flex justify-center items-end">
            <div className="relative z-10 md:w-[18vw]">
              <Image
                src="/doctor-1.png"
                alt="의료진"
                width={425}
                height={760}
                className="obejct-contain"
              />
            </div>
            <div className="relative z-10 md:w-[18vw]">
              <Image
                src="/doctor-2.png"
                alt="의료진"
                width={425}
                height={760}
                className="obejct-contain"
              />
            </div>
          </div>
          <div className="w-full h-[100vh] relative md:px-0;">
            <Image
              src="/section-6-bg.png"
              alt="배경이미지"
              fill
              className="object-cover object-bottom-right"
              />
          </div>
        </div>
      </section>
      <section id="section-6">
        <div className="w-full relative">
          <div className="absolute z-10 text-white md:right-0 md:pt-[15vw] px-[3vw] pt-[12vw]">
            <FadeInUp>
              <div className="md:mb-[7vw] md:pr-[5vw] mb-[15vw]">
                <p className="text-[clamp(8px,1vw,12px)] tracking-[3px] md:mb-[2vw] mb-[5vw]">UROLOGY CLINIC</p>
                <p className="text-[clamp(16px,1vw,28px)]">서울병원 전문의 출신</p>
                <p className="text-[clamp(36px,1vw,56px)]"><span className="font-bold">가원장</span> 대표원장 <span className="font-bold md:hidden">인사말</span></p>
              </div>
            </FadeInUp>
            <FadeInUp>
                <div className="md:mb-[2vw] md:pr-[5vw] border-b border-b-[#6c6c6c] md:block hidden">
                  <p className="font-bold text-[clamp(20px,1vw,28px)]">비뇨기과의원 병원장 인사말</p>
                </div>
            </FadeInUp>
            <FadeInUp>
              <div className="md:mb-[2vw] md:pr-[5vw] text-[clamp(14px,1vw,18px)] mb-[5vw]">
                <p className="md:block hidden">우리나라 최고의 병원에서 비뇨기과라는 생소한 학문을 전공하고 연고도 없고 태어나 한</p>
                <p className="md:block hidden">번도 방문한 적이 없었던 서울로 내려와 지역민들과 함께 울고 함께 웃으며 진료한 지 어</p>
                <p className="md:block hidden">느덧 14년째를 보내고 있습니다.</p>
                <p className="md:hidden">우리나라 최고의 병원에서 비뇨기과라는 생소한 학문을 전공하고 연고도 없고 태어나 한번도 방문한 적이 없었던 천안으로 내려와 지역민들과 함께 울고 함께 웃으며 진료한 지 어느덧 14년째를 보내고 있습니다</p>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="md:mb-[2vw] md:pr-[5vw] text-[clamp(14px,1vw,18px)] mb-[5vw]">
                <p className="md:block hidden">저를 비롯하여 삼성비뇨기과 직원 모두가 환자분들께 불편한 몸의 회복뿐만 아니라 이곳</p>
                <p className="md:block hidden">에 오길 잘했다는 흐뭇한 마음과 좋은 경험을 드리고자 노력해 온 짧지 않은 시간이었습</p>
                <p className="md:block hidden">니다.</p>
                <p className="md:hidden">저를 비롯하여 비뇨기과 직원 모두가 환자분들께 불편한 몸의 회복뿐만 아니라 이곳에 오길 잘했다는 흐뭇한 마음과 좋은 경험을 드리고자 노력해 온 짧지 않은 시간이었습니다.</p>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="md:mb-[2vw] md:pr-[5vw] text-[clamp(14px,1vw,18px)] mb-[5vw]">
                <p className="md:block hidden">그동안 감사하게도 14만 여명 이상의 많은 환자분들이 우리 병원을 찾아주셔서 협소한</p>
                <p className="md:block hidden">공간 문제를 해결하기 위해 2년 전 현 위치로 병원을 확장, 이전하여 진료 중이고 양질의</p>
                <p className="md:block hidden">서비스를 제공하고자 각고의 노력을 기울이고 있습니다.</p>
                <p className="md:hidden">그동안 감사하게도 14만여명 이상의 많은 환자분들이 우리 병원을 찾아주셔서 협소한 공간 문제를 해결하기 위해 1년 전 현위치로 병원을 확장, 이전하여 진료중이고 이제는 환자분들의 진료 대기시간을 줄이고 양질의 서비스를 제공하고자 비뇨기과 전문의 2인 진료를 시작하려고 합니다.</p>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="md:pr-[5vw] text-[clamp(14px,1vw,18px)]">
                <p className="md:block hidden">앞으로도 환자 한 분 한 분께 최선의 진료로 임할 것을 약속드리며, 환절기 건강 유의하시</p>
                <p className="md:block hidden">고 행복한 하루 되시기를 바랍니다. 감사합니다.</p>
                <p className="md:hidden">앞으로도 환자 한 분 한 분께 최선의 진료로 임할 것을 약속드리며, 환절기 건강 유의하시고 행복한 하루 되시기를 바랍니다. <br/>감사합니다.</p>
              </div>
            </FadeInUp>
          </div>
          <div className="w-full h-[100vh] relative md:px-0;">
              <Image
                src="/section-7-bg.png"
                alt="배경이미지"
                fill
                className="object-cover object-top hideen md:blokc"
              />
              <Image
                src="/section-7-bg-m.png"
                alt="배경이미지"
                fill
                className="object-cover object-top md:hidden block"
              />
          </div>
        </div>
      </section>
    </main>
  );
}
