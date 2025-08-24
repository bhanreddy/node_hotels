const mongoose = require('mongoose');

const personSchema =new mongoose.Schema(
    {
        name:{
            required:true,
            type:String
        },
        age:{
            type: Number,
            required:true
        },
        email:{
            type: String,
            required:true,
            unique:true
        },
        position:{
            type:String,
            enum:['Chef','Manager','Waiter'],
            required:true
        },
        salary:{
            type:Number,
            required:true
        },
        address:{
            type: String,

        }

    }
);
const Person = mongoose.model("Person", personSchema);

module.exports = Person;