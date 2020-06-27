const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) =>{

    Data.findOne({
        userID: message.author.id
    },(err, data) =>{
        if(err) console.log(err);

            data.userID =userID[message.author.id].userID;
            data.save().catch(err => console.log(err));
            message.channel.send("done")
    })
    
}

module.exports.help = {
    name:"update",
    aliases:["bal" , "$"]
}