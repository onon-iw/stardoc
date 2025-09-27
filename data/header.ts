import { MenuItem } from "@/types/header";

export const menuItems: MenuItem[] = [
    {title: '비뇨기과의원', href: "/", 
      submenu: [
        {title: '인사말', href:"/"},
        {title: '의료진소개', href:"/"},
        {title: '병원 둘러보기', href:"/"},
        {title: '블로그', href:"/"},
      ]
    },
    {title: '요로결석', href:"/"},
    {title: '정관수술', href:"/"},
    {title: '남성수술', href: "/", 
      submenu: [
        {title: '포경수술', href:"/"},
        {title: '발기부전 수술', href:"/"},
        {title: '남성 음경확대 수술', href:"/"},
        {title: '남성 귀두확대 수술', href:"/"},
      ]
    },
    {title: '여성 요실금 수술', href: "/"},
    {title: '남성비뇨기과', href: "/", 
      submenu: [
        {title: '전립선', href:"/"},
        {title: '남성갱년기', href:"/"},
        {title: '요도염 (임질)', href:"/"},
        {title: '산전검사', href:"/"},
        {title: '남성불임', href:"/"},
      ]
    },
    {title: '여성비뇨기과', href: "/", 
      submenu: [
        {title: '방광염', href:"/"},
        {title: '과민성 방광', href:"/"},
      ]
    },
    {title: '고객센터', href: "/", 
      submenu: [
        {title: '온라인 상담', href:"/"},
        {title: '온라인 예약', href:"/"},
        {title: '오시는 길', href:"/"},
        {title: '공지사항', href:"/"},
        {title: '비급여 안내', href:"/"},
      ]
    },
  ]