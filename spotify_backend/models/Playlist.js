const mongoose = require("mongoose");

// how to create a model
// 1) Import mongoose 2) Create Schema 3) Create a model

const Playlist = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    thumbnail:{
        type: String,
        required:true,
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref:"user",
    },
    songs:[{
        type: mongoose.Types.ObjectId,
        ref:"song",
    }],
    collaborators:[{
        type: mongoose.Types.ObjectId,
        ref:"user",
    }],
    //songs in playlist
    //collaborator

});

const PlaylistModel = mongoose.model("Playlist",Playlist);

module.exports = Playlist;