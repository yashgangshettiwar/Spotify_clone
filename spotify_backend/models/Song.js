const mongoose = require("mongoose");
// const UserModel = require("./User");

// how to create a model
// 1) Import mongoose 2) Create Schema 3) Create a model

const Song = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    thumbnail:{
        type: String,
        required:true,
    },
    track:{
        type:String,
        required:true,
    },
    artist:{
        type: mongoose.Types.ObjectId,
        ref:"user",
        required:true,
    },
});

const SongModel = mongoose.model("Song",Song);

module.exports = SongModel;