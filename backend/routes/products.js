const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.post("/products" , async (req, res) => {
        
    const {title, desc, img, details,color,tag} = req.body;
    
    let a = new Products({title, desc, img, details,color,tag});
    await a.save();
    
    res.status(200).send({success : true});
}
);

router.get("/show" , async (req, res) => {
    const result= await Products.find();
    console.log(result);
    res.send({result});
});

router.post ("/showone",async(req,res)=>{
     const {id}=req.body;
     const product = await Products.findById(id);
     console.log(product);
     res.send({product});
})

module.exports = router;