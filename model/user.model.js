const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userScheam = new schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    contactNumber:{
        type:Number
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User',userScheam);