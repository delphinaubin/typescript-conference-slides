/*
// Un comment to start the presentation
interface SlideContent {
  type: string;
  title?: string;
  subtitle?: string;
  fileName?: string;
  imageSrc?: string;
} */

export interface TitleSlideContent {
  type: "title";
  title: string;
  subtitle?: string;
}

export interface CodeSlideContent {
  type: "code";
  title: string;
  fileName: string;
}

export interface ImageSlideContent {
  type: "image";
  title?: string;
  imageSrc: string;
}

export const slides: SlideContent[] = [
  {
    type: "title",
    title: "And wait...",
    subtitle: "There is more!",
  },
  {
    type: "code",
    title: "You can do that:",
    fileName: "json-code-sample.code.ts",
  },
  {
    type: "image",
    imageSrc:
      "https://wallpapers.com/images/hd/cool-picture-art-of-lion-rlst9ftvz1dvvn37.jpg",
  },
];

export type SlideContent =
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
