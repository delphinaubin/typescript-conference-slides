import {RenderBlock} from "./render-block";

export class Slide extends RenderBlock {
  withChild(children: RenderBlock[]): RenderBlock {
    return new Slide(children);
  }

  override getHtmlElement(): HTMLElement {
    return document.createElement("section");
  }
}