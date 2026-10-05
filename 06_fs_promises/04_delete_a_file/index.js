import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log_full_path = path.join(__dirname,"my_logs.log");

const deleteFile = async()=>{
    try {
        await fs.unlink(log_full_path);
    } catch (error) {
        console.log(error.message);
    }
}

deleteFile();