const express = require('express');
const router = express.Router();
const menuItem = require('../Schemas/menuItems');

router.get('/',async (req,res)=>{
    try{
        const response = await menuItem.find();
        res.status(200).json(response);
    }catch(err){
        console.log(err)
        res.status(500).json({Error:"Internal Server Error"})
    }
});

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const response = await menuItem.save(data);
        res.status(200).json(response);
    }catch(err){
        console.log(err)
        res.status(500).json({Error:"Internal server error"});
    }
});

module.exports = router;