import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const old_directory_path = path.join(__dirname,"folder_1");
const new_directory_path = path.join(__dirname,"my_folder_1");

const renameDirectory = async()=>{
    try {
        await fs.rename(old_directory_path,new_directory_path);
    } catch (error) {
        console.log(error.message);
    }
}

renameDirectory();