import { RenderBlock } from "./render-block";

type CodeSingleLine = `${number}` | `${number}-${number}`;

// TODO DAU: find a better way
type CodeLines =
  | CodeSingleLine
  | `${CodeSingleLine},${CodeSingleLine}`
  | `${CodeSingleLine},${CodeSingleLine},${CodeSingleLine}`

export type CodeSteps =
  | CodeLines
  | `${CodeLines}|${CodeLines}`
  | `${CodeLines}|${CodeLines}|${CodeLines}`
  | `${CodeLines}|${CodeLines}|${CodeLines}|${CodeLines}`

const CODE_SAMPLE_PUBLIC_DIRECTORY = "code-samples";
export class Code extends RenderBlock {
  private steps: CodeSteps | null = null;
  static withCode(code: string): Code {
    return new Code(code);
  }

  static async fromFile(fileName: string): Promise<Code> {
    const fileContent = await fetch(
      `${CODE_SAMPLE_PUBLIC_DIRECTORY}/${fileName}`,
    );
    const content = await fileContent.text();
    return new Code(content);
  }

  constructor(private readonly code: string) {
    super([]);
  }

  withSteps(steps: CodeSteps): this {
    this.steps = steps;
    return this;
  }

  override getHtmlElement(): HTMLElement {
    const preElement = document.createElement("pre");
    const codeElement = document.createElement("code");
    if (this.steps) {
      codeElement.setAttribute("data-line-numbers", this.steps);
    }

    codeElement.setAttribute("data-trim", "true");
    codeElement.setAttribute("data-noescape", "true");
    codeElement.append(document.createTextNode(this.code));
    preElement.append(codeElement);
    return preElement;
  }
}
