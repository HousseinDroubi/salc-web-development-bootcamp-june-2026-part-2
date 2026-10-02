import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const log_full_path = path.join(__dirname,"my_logs.log");

const writeToFile = async()=>{
    try {
        await fs.writeFile(log_full_path, "[DONE]: API SENT SUCCESSFULLY" ,"utf-8");
    } catch (error) {
        console.log(error.message);
    }
}

writeToFile();