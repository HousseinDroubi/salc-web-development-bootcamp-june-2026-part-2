import { Router, type Request, type Response} from "express";

const router = Router();

let products_db = [
    {
        id:1,
        name:"p1",
        user_id:1,
    },
    {
        id:2,
        name:"p2",
        user_id:2,
    },
    {
        id:3,
        name:"p3",
        user_id:3,
    },
];

router.get("/",(req:Request, res:Response)=>{
    return res.status(200).json({
        products:products_db
    });
});

router.post("/",(req:Request, res:Response)=>{
    const {product} = req.body;
    products_db.push(product);
    return res.status(201).json({
        message:"Product Added"
    });
});

router.put("/:id",(req:Request, res:Response)=>{
    const id = parseInt(req.params.id as string);
    const {name} = req.body;
    const index = products_db.findIndex((product)=>product.id == id);
    
    if(index==-1){
        return res.status(404).json({
            message:"Product not found"
        })
    }
    products_db[index]!.name = name;
    return res.status(200).json({
        message:"Product Updated"
    });
});

router.delete("/:id",(req:Request, res:Response)=>{
    const id = parseInt(req.params.id as string);
    const index = products_db.findIndex((product)=>product.id == id);
    
    if(index==-1){
        return res.status(404).json({
            message:"Product not found"
        })
    }
    products_db = products_db.filter((product)=>product.id!=id);
    return res.status(200).json({
        message:"Product Deleted"
    });
});

export default router;