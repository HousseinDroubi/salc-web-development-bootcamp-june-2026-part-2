import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

console.log(path.parse(__filename)); // some info about the file