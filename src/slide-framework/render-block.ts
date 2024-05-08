export abstract class RenderBlock {
  constructor(protected readonly children: RenderBlock[]) {
    this.children = children;
  }

  abstract getHtmlElement(): HTMLElement;

  render(): HTMLElement {
    const element = this.getHtmlElement();
    const childrenElements = this.children.map((child) => child.render());
    childrenElements.forEach((childElement) => element.append(childElement));
    return element;
  }
}