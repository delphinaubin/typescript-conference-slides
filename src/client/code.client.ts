import axios from "axios";

interface CompiledCode {
  compiled: { outputText: string; diagnostics: unknown[] };
}

interface NotCompiledCode {
  code: string;
}

export async function fetchCode(
  fileName: string,
  outputLanguage: "js",
): Promise<CompiledCode>;
export async function fetchCode(
  fileName: string,
  outputLanguage: "ts",
): Promise<NotCompiledCode>;
export async function fetchCode(
  fileName: string,
  outputLanguage: "js" | "ts",
): Promise<CompiledCode | NotCompiledCode> {
  const url = new URL("http://localhost:3000/code");
  url.searchParams.set("fileName", fileName);
  url.searchParams.set("outputLanguage", outputLanguage);

  const response = await axios.get<CompiledCode | NotCompiledCode>(
    url.toString(),
  );
  return response.data;
}
