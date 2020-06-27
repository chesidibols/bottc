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

    Data.findOneAndUpdate({
        userID: message.author.id
    },(data) =>{
        if(data) console.log(err);
            const newData = new Data({
                name: message.author.id,
                userID: message.author.id,
            })
            newData.save().catch(err => console.log(err));
    })
    
}

module.exports.help = {
    name:"update",
    aliases:[]
}