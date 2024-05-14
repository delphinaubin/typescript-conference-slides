import "./monokai.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

import { Slide } from "./slide.block";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

export class SlideDeck {
  constructor(
    private readonly slides: Slide[],
    private readonly htmlElementId: string,
  ) {}

  init() {
    const rootElement = document.getElementById(this.htmlElementId);
    if (!rootElement) {
      throw new Error(
        `Cannot initialize slideDeck on an unknown dom element ID (${this.htmlElementId})`,
      );
    }

    rootElement.innerHTML = "";
    this.slides.forEach((slide) => {
      rootElement.append(slide.render());
    });

    Reveal.initialize({
      hash: true,
      plugins: [RevealHighlight],
    });
  }
}
