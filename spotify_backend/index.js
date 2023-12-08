//import required packages
const express = require("express");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
require("dotenv").config();
const passport = require("passport");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 8000;

// MongoDB connection start
// 1) which db to connect to using url
// 2) Connection option
const db_url = 'mongodb+srv://'+process.env.MONGO_DB_USERNAME+':'+process.env.MONGO_DB_PASSWORD+'@cluster0.jyy4eiv.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(db_url,{
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
run().catch(console.dir);
// connection code end

// setup up passport-jwt for authentication

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PASSPORT_KEY;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));



app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.listen(port,()=>{
    console.log("app is running")
})