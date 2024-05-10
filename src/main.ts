import "./style.css";
import { Slide } from "./slide-framework/slide";
import { Title } from "./slide-framework/title";
import { SlideDeck } from "./slide-framework/slide-deck";
import { Subtitle } from "./slide-framework/subtitle";
import { Code } from "./slide-framework/code";

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

const slideDeck = new SlideDeck([slide1, slide2, slide3], "slide-container");
slideDeck.init();
