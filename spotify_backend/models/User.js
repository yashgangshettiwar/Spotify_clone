const mongoose = require("mongoose");

// how to create a model
// 1) Import mongoose 2) Create Schema 3) Create a model

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    }, 
    likedSongs:{
        //change it to array later
        type:String,
        default:"",
    },
    likedPlaylist:{
        //change it to array later
        type:String,
        default:"",
    },
    subscribeArtist:{
        //change it to array later
        type:String,
        default:"",
    }, 

});

const UserModel = mongoose.model("User",User);

module.exports = UserModel;