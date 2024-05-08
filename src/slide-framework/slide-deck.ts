import {Slide} from "./slide";

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
  }
}
