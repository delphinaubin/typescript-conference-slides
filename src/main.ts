import "./style.css";
import { SlideDeck } from "./slide-framework/slide-deck";
import { Code } from "./slide-framework/code.block";
import { Subtitle } from "./slide-framework/subtitle.block";
import { Slide } from "./slide-framework/slide.block";
import { Title } from "./slide-framework/title.block";
import { Image } from "./slide-framework/image.block";

const slide1 = new Slide([
  Title.withText("Hello TypeScript!"),
  Subtitle.withText("And more..."),
]).withTransition("none");

const slide2 = new Slide([
  Subtitle.withText("This is the second slide..."),
]).withTransition("none-in slide-out");

const slide3 = new Slide([
  Title.withText("Some code"),
  (await Code.fromFile("test.code.ts")).withSteps("2|2-3|0-100"),
]);

const slide4 = new Slide([
  Subtitle.withText("We ❤️ code but we also ❤️ images !"),
  Image.withSrc("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGEwd2I4enBxd2xyNGdjdzVlbzdma2lkZnpkN2FvZjZlcTF6N2hwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mgqefqwSbToPe/giphy.gif"),
]);

const slideDeck = new SlideDeck(
  [slide1, slide2, slide3, slide4],
  "slide-container",
);
slideDeck.init();
