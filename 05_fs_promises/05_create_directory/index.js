// /home/hu..../05_fs_promises/folder_1/folder_2
import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const new_directory_path = path.join(__dirname,"folder_1","folder_2");

const createDirectory = async()=>{
    try {
        await fs.mkdir(new_directory_path, {recursive:true}); // create nested folders
    } catch (error) {
        console.log(error.message);
    }
}

createDirectory();