const express = require('express');
const router = express.Router();
const Person = require('../Schemas/person')
router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newPerson =new Person(data);
        const response =await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
router.get('/',async (req,res)=>{
    try{
        const response = await Person.find();
        res.status(200).json(response);
        console.log("data Fetched successfully")
    }catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal server error"});
    }
});
router.get('/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=="Chef" || workType=="Manager" || workType=="Waiter"){
            const response = Person.find({position:workType})
            res.status(200).json(response);
            console.log("Worker data fetched Successfully")
        }else{
            res.status(404).json({error:"sahi worktype daal gaandu"});
            console.log("worktype Not found")
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server Error"})
    }
});
router.patch('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const update = req.body;

        const updatedPerson = await Person.findByIdAndUpdate(id,update,{new:true,runValidators:true})
        if(!updatedPerson){
            res.status(404).json({message:"Person Not found"})
        }
        res.status(200).json(updatedPerson);

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;

        const deletedPerson = await Person.findByIdAndDelete(id);
        if(!deletedPerson){
            res.status(404).json({message:"Person Not found"})
        }
        res.status(200).json(deletedPerson);

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
});

module.exports = router;