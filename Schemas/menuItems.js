const mongoose = require('mongoose');
const newMenuItem = new mongoose.Schema(
    {
        itemName:{
            required:true,
            type:String,
            unique:true
        },
        ingredients:{
            required:true,
            type:String
        },
        itemType:{
            required:true,
            type:String
        },
        spicyLevel:{
            type:String,
            required:true,
            enum:['mild','moderate','extreme']
        }
    }
)

const menuItem = mongoose.model("menuItem",newMenuItem);
module.exports = menuItem;