const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/signup" , async (req, res) => {
        

    res.status(200).send({success : true});
}
);

router.post("/login" , async (req, res) => {
        
    const { email, password} = req.body;
    
    let u = await User.findOne({email : email});

    if(u.password ===password){
        console.log("Password is Correct");
        res.status(200).send({success : true});
    }

    res.status(200).send({success : false});
}

);

router.post("/update" , async (req, res) => {
        
    const { email, phone} = req.body;
    
    let u = await User.findOneAndUpdate({"email":email},{"phone":phone});


    res.status(200).send({success : true});
}

);

module.exports = router;