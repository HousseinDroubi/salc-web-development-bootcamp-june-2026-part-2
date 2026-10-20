import { Router, type Request, type Response} from "express";

const router = Router();

let users_db = [
    {
        id:1,
        name:"Houssein",
        age:29,
    },
    {
        id:2,
        name:"Ali",
        age:20,
    },
    {
        id:3,
        name:"Houssam",
        age:19,
    },
];

router.get("/",(req:Request, res:Response)=>{
    return res.status(200).json({
        users:users_db
    });
});

router.post("/",(req:Request, res:Response)=>{
    const {user} = req.body;
    users_db.push(user);
    console.log(users_db);
    return res.status(201).json({
        message:"User Added"
    });
});

router.put("/:id",(req:Request, res:Response)=>{
    const id = parseInt(req.params.id as string);
    const {age} = req.body;
    const index = users_db.findIndex((user)=>user.id == id);
    
    if(index==-1){
        return res.status(404).json({
            message:"User not found"
        })
    }
    console.log(users_db);
    users_db[index]!.age = age;
    console.log(users_db);
    return res.status(200).json({
        message:"User Updated"
    });
});

router.delete("/:id",(req:Request, res:Response)=>{
    const id = parseInt(req.params.id as string);
    const index = users_db.findIndex((user)=>user.id == id);
    
    if(index==-1){
        return res.status(404).json({
            message:"User not found"
        })
    }
    users_db = users_db.filter((user)=>user.id!=id);
    console.log(users_db);
    return res.status(200).json({
        message:"User Deleted"
    });
});


export default router;