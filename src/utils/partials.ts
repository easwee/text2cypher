import { join, parse } from "path";
import { readFileSync, readdirSync } from "fs";

interface PartialConfig {
  [partialName: string]: string;
}

export function loadPartials(folderPath: string): PartialConfig {
  const partialsFiles = readdirSync(folderPath);
  const partials: PartialConfig = {};

  partialsFiles.forEach((file) => {
    const partialName = parse(file).name;
    partials[partialName] = "partials/" + file;
  });

  return partials;
}
