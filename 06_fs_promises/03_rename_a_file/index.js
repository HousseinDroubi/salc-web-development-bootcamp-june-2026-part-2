import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const old_log_full_path = path.join(__dirname,"old_logs.log");
const new_log_full_path = path.join(__dirname,"new_logs.log");

const renameFile = async()=>{
    try {
        await fs.rename(old_log_full_path, new_log_full_path);
    } catch (error) {
        console.log(error.message);
    }
}

renameFile();