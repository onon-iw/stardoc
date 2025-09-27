export interface Slide {
  src: string;
  alt: string;
  width: number;
  height: number;
  node?: React.ReactNode;
  position?: {
    flex?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    items?: string;
    justify?: string;
    inset?: string;
    direction?: string;
  }
}

export interface SliderProps {
  slides: Slide[];
  autoplay?: boolean;
  navigation?: boolean;
}
