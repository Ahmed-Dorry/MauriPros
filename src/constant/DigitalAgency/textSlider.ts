export interface ITextSlide {
  id: number;
  text: string;
  href: string;
  img: string;
}

export interface TextSliderData {
  slides: ITextSlide[];
}