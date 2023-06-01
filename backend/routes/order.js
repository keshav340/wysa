const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

//api for saving order information in databse
router.post("/orderinfo" , async (req, res) => {
    const {email,orderid,quantity,paymentinfo,phone,products,address,pincode,amount,status,deliveryStatus}=req.body;
    let b=new Order({email,orderid,quantity,paymentinfo,phone,products,address,pincode,amount,status,deliveryStatus});
    await b.save();
    res.status(200).send({success : true});
});
// api for fetching final information from databse to show in orders menu
router.get("/orderstat" , async (req, res) => {
    const {email}=req.body;
    let u = await Order.findOne({email : email});
    if(u.email===email)
    {
        let data=u.orderid;
        let data2=u.amount;
        let data3=u.status;
        let data4=u.deliveryStatus;
        res.send({data,data2,data3,data4});
    }
    res.status(200).send({success : true});
});








module.exports = router;