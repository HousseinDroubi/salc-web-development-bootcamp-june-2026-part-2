import express, {type Request, type Response} from "express";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req:Request,res:Response)=>{
    return res.send('Hi from express server');
});

app.get("/return_string",(req:Request,res:Response)=>{
    return res.send('Another api returning a string');
});

app.get("/return_json",(req:Request,res:Response)=>{
    return res.json({
        username:"Houssein",
        age:29
    });
});

app.get("/read_query/:id/:username/:age",(req:Request,res:Response)=>{
    const {id,username,age} = req.params;
    return res.json({
        id_sent:parseInt(id as string),
        username_sent:username,
        age_sent:parseInt(age as string)
    });
});

app.get("/read_query",(req:Request,res:Response)=>{
    const {id,username,age} = req.query;
    return res.json({
        id_sent:parseInt(id as string),
        username_sent:username,
        age_sent:parseInt(age as string)
    });
});

app.get("/return_html_file",(req:Request,res:Response)=>{
    const __dirname = import.meta.dirname;
    const html_file_path = path.join(__dirname,"..","public","static","index.html");

    return res.sendFile(html_file_path);
});

app.get("/return_custom_status_code",(req:Request,res:Response)=>{

    return res.status(202).send("Hi from server");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
} )
