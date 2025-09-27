export interface MenuItem {
  title: string
  href : string
  submenu? : {title: string; href: string}[]
}

export interface HeaderProps {
  isMenuHover : boolean;
  isOpen: boolean;
  isScroll: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
