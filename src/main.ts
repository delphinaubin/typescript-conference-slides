import "./style.css";
import "./monokai.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import { Slide } from "./slide-framework/slide";
import { Title } from "./slide-framework/title";
import { SlideDeck } from "./slide-framework/slide-deck";
import {Subtitle} from "./slide-framework/subtitle";

Reveal.initialize({
  hash: true,
  plugins: [RevealHighlight],
});

const slide1 = new Slide([
  Title.withText("Hello TypeScript!"),
  Subtitle.withText("And more..."),
]);
const slide2 = new Slide([Subtitle.withText("This is the second slide...")]);

const slideDeck = new SlideDeck([slide1, slide2], "slide-container");
slideDeck.init();
