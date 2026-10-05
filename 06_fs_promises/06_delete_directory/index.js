import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory_path = path.join(__dirname,"folder_1");

const removeDirectory = async()=>{
    try {
        await fs.rm(directory_path, {recursive:true, force:true});
         // recursive:true allows your to delete directories that still contain files and subdirectories
        // force:true prevents NodeJS to throw an error if the directory wasn't existed 
    } catch (error) {
        console.log(error.message);
    }
}

removeDirectory();