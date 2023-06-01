const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

router.get("/wysa_login",async(req,res) => {
    res.status(200).send({success : "I was here until now !"});
})

module.exports = router;