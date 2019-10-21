const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
    id : {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required:true
    }
});

module.exports = User = mongoose.model("user", UserSchema);