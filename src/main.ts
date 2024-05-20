import "./style.css";
import { SlideDeck } from "./slide-framework/slide-deck";
import { Subtitle } from "./slide-framework/subtitle.block";
import { Slide } from "./slide-framework/slide.block";
import { Image } from "./slide-framework/image.block";
import { TitleSlide } from "./title.slide";
import { CodeSlide } from "./code.slide";
import { getSlides } from "./slide-content/render-slides";
import {CompiledCodeSlide} from "./compiled-code.slide";

function getTitle(): string {
  if (window.innerWidth > 400) {
    return "The Big title";
  }
  // TODO: remove this line to demonstrate
  return "The small title";
}

const slide1 = new TitleSlide(getTitle(), "And more...");

const slide2 = new Slide([
  Subtitle.withText("This is the second slide..."),
]).withTransition("none-in slide-out");

const slide3 = new CodeSlide("test.code.ts", "Some code");

const slide4 = new Slide([
  Subtitle.withText("We ❤️ code but we also ❤️ images !"),
  Image.withSrc(
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGEwd2I4enBxd2xyNGdjdzVlbzdma2lkZnpkN2FvZjZlcTF6N2hwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mgqefqwSbToPe/giphy.gif",
  ),
]);

const slide5 = new TitleSlide("Title 2", "And more...");

const slide6 = new Slide([
  Subtitle.withText("This is the second slide..."),
]).withTransition("none-in slide-out");

const otherSlides = getSlides();

const slide7 = new TitleSlide("Title 3", "And more...");

const enumSlide = new CompiledCodeSlide('enum.ts')

const slides = [
  enumSlide,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  ...otherSlides,
];

const summary = new Slide([
  Subtitle.withText("👇 Summary 👇"),
  ...getAllTitleSlidesTitle(slides).map((s) => Subtitle.withText(s)),
]);

const slideDeck = new SlideDeck([summary, ...slides], "slide-container");

slideDeck.init();

function getAllTitleSlidesTitle(slides: Slide[]): string[] {
  return (
    slides.filter((slide) => slide instanceof TitleSlide) as TitleSlide[]
  ).map((slide) => slide.title);
}
