import { Code } from "./code.block";

const CODE_SAMPLE_PUBLIC_DIRECTORY = "code-samples";

export class CodeFromFile extends Code {
  static fromFile(fileName: string): CodeFromFile {
    return new CodeFromFile(fileName);
  }

  constructor(private readonly fileName: string) {
    super();
  }

  protected override async getCode() {
    const fileContent = await fetch(
      `${CODE_SAMPLE_PUBLIC_DIRECTORY}/${this.fileName}`,
    );
    return await fileContent.text();
  }
}
