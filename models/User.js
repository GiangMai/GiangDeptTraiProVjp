const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email: {
        type:String,
        required:true,
        min:6,
        max:255
    },
    password: {
        type:String,
        required:true,
        min:6,
        max:1024
    },
    data: {
        type:DataCue,
        default: Data.now
    }
});

module.exports = new mongoose.model('User',userSchema);

